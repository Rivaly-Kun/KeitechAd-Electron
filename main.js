// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const db = require('./db'); // Assumes you have a db.js that connects to studentdata.db

function createWindow() {
  const mainWindow = new BrowserWindow({
    fullscreen: true, // Fullscreen window
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');

  // Optional: Open the DevTools.
  // mainWindow.webContents.openDevTools();
}

// ✅ IPC handlers should be declared outside createWindow
ipcMain.handle('get-all-admissions', () => {
  return db.getAllAdmissions();
});

ipcMain.handle('get-admission-by-id', (event, id) => {
  return db.getAdmissionById(id);
});

// App ready
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // Recreate window on macOS when dock icon is clicked
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
