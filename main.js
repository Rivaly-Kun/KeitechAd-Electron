
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');  
const fs = require('fs');     
const db = require('./db');        


function createWindow() {
  const mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.webContents.openDevTools(); // Optional
}

// IPC handlers
ipcMain.handle('insertStudent', async (event, formData) => {
  try {
    const uid = formData.uid;

    // Create folders if they don't exist
    const imgDir = path.join('./studentimgs');
    const sigDir = path.join('./signatures');
    if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
    if (!fs.existsSync(sigDir)) fs.mkdirSync(sigDir, { recursive: true });

    // Save ID picture
    if (formData.id_picture) {
      const fileName = `${uid}_id.jpg`;
      const idPicPath = path.join(imgDir, fileName);
      const base64Data = formData.id_picture.replace(/^data:image\/\w+;base64,/, '');
      fs.writeFileSync(idPicPath, base64Data, 'base64');
      formData.id_picture = uid; 
    }

    // Save signature 1
    if (formData.signature_image) {
      const fileName = `${uid}_signature1.png`;
      const sig1Path = path.join(sigDir, fileName);
      const base64Data = formData.signature_image.replace(/^data:image\/\w+;base64,/, '');
      fs.writeFileSync(sig1Path, base64Data, 'base64');
      formData.signature_image = uid;
    }

    // Save signature 2
    if (formData.voucher_signature_image) {
      const fileName = `${uid}_signature2.png`;
      const sig2Path = path.join(sigDir, fileName);
      const base64Data = formData.voucher_signature_image.replace(/^data:image\/\w+;base64,/, '');
      fs.writeFileSync(sig2Path, base64Data, 'base64');
      formData.voucher_signature_image = uid; 
    }

    // Save in DB
    db.insertStudent(formData);
    return { success: true };
  } catch (err) {
    console.error('DB Error:', err);
    return { success: false, error: err.message };
  }
});


ipcMain.handle('insertOrUpdateStudent', async (event, formData) => {
  try {
    const uid = formData.uid;

    // --- Create folders if needed ---
    const imgDir = path.join('./studentimgs');
    const sigDir = path.join('./signatures');
    if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
    if (!fs.existsSync(sigDir)) fs.mkdirSync(sigDir, { recursive: true });

    // --- Save ID picture ---
    if (formData.id_picture && formData.id_picture.startsWith('data:image')) {
      const fileName = `${uid}_id.jpg`;
      const idPicPath = path.join(imgDir, fileName);
      const base64Data = formData.id_picture.replace(/^data:image\/\w+;base64,/, '');
      fs.writeFileSync(idPicPath, base64Data, 'base64');
      formData.id_picture = uid;
    }

    // --- Save signature 1 ---
    if (formData.signature_image && formData.signature_image.startsWith('data:image')) {
      const fileName = `${uid}_signature1.png`;
      const sig1Path = path.join(sigDir, fileName);
      const base64Data = formData.signature_image.replace(/^data:image\/\w+;base64,/, '');
      fs.writeFileSync(sig1Path, base64Data, 'base64');
      formData.signature_image = uid;
    }

    // --- Save signature 2 ---
    if (formData.voucher_signature_image && formData.voucher_signature_image.startsWith('data:image')) {
      const fileName = `${uid}_signature2.png`;
      const sig2Path = path.join(sigDir, fileName);
      const base64Data = formData.voucher_signature_image.replace(/^data:image\/\w+;base64,/, '');
      fs.writeFileSync(sig2Path, base64Data, 'base64');
      formData.voucher_signature_image = uid;
    }

    // --- Insert or update in DB ---
    db.insertOrUpdateStudent(formData);

    return { success: true };
  } catch (err) {
    console.error('DB Save Error:', err);
    return { success: false, error: err.message };
  }
});



ipcMain.handle('get-all-admissions', () => db.getAllAdmissions());
ipcMain.handle('get-admission-by-id', (event, id) => db.getAdmissionById(id));

// App lifecycle
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
