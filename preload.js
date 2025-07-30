const { contextBridge, ipcRenderer } = require('electron');
console.log('✅ preload.js is running');

// Expose safe APIs to renderer process
contextBridge.exposeInMainWorld('api', {
  getAllAdmissions: () => ipcRenderer.invoke('get-all-admissions'),
  getAdmissionById: (id) => ipcRenderer.invoke('get-admission-by-id', id),
  insertStudent: (data) => ipcRenderer.invoke('insert-student', data)
});

// (Optional) Keep your DOMContentLoaded version display
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});
