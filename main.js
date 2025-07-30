const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const db = require('./db'); // Assumes db.js exports insertStudent, getAllAdmissions, getAdmissionById

function createWindow() {
  const mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,  // ✅ Security: isolates preload
      nodeIntegration: false   // ✅ Security: disables Node in renderer
    }
  });

  mainWindow.loadFile('index.html');

  // Optional: DevTools for debugging
  mainWindow.webContents.openDevTools();
}

// IPC handlers
ipcMain.handle('insert-student', async (event, formData) => {
  console.log('≡ insert-student received in main process');
  console.log('📝 FormData Keys:', Object.keys(formData));
  console.log('📝 uli_number value:', formData.uli_number);
  try {
    db.insertStudent(formData);
    return { success: true };
  } catch (err) {
    console.error('DB Error:', err);
    return { success: false, error: err.message };
  }
});




ipcMain.handle('get-all-admissions', () => {
  return db.getAllAdmissions();
});

ipcMain.handle('get-admission-by-id', (event, id) => {
  return db.getAdmissionById(id);
});

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
