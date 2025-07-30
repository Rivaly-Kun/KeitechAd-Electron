# 🏫 Keitech Student Admission

An offline desktop application for managing student admissions at Keitech, built with Electron and modern JavaScript tools.

---

## 🚀 Getting Started

### 1. Clone and Install

```bash

git clone https://github.com/electron/electron-quick-start

cd electron-quick-start

npm install

2. Start the App

npm start

3. Use Auto Reload in Development

npm install --save-dev electronmon

npx electronmon .

# 📦 Required Packages

Install these core dependencies:

npm install better-sqlite3 sweetalert2 tesseract.js

For native module rebuilding:

npm install --save-dev electron-rebuild

npx electron-rebuild

# ✨ Features 

✅ Save & Manage Student Data. 

Add new students with a simple form.

Update and delete existing records.

Automatically saves to local SQLite database (offline-ready).

# 🗃️ Archive System

Archive past or inactive students with one click.

Easily restore or permanently delete archived entries.

# 🥇 Best Free JS-Based OCR for Electron 

Uses Tesseract.js, a pure JavaScript port of Tesseract OCR.

Scans printed forms to extract student data quickly.

No internet, API keys, or tokens required.

Perfect for digitizing old physical forms still used by schools.

# 🔍 Built-in Search (Ctrl + F)
Press Ctrl + F inside the app to search for student records.

Instantly filter students by name, ID, or any text.

Makes browsing fast and seamless, like a web browser.

# 🧠 Technologies Used

Electron – Cross-platform desktop app framework.

better-sqlite3 – Fast, simple SQLite database engine.

tesseract.js – Offline OCR engine in pure JS.

sweetalert2 – Beautiful modals for alerts and confirmations.

electronmon – Auto-reloader for faster development.

🛠 Developer Note (Rebuild if adjusting pre loader and IPC to avoid head aches haha)

npx electron-rebuild