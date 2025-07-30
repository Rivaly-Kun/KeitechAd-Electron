const Database = require('better-sqlite3');
const path = require('path');

// Load your existing SQLite file
const dbPath = path.join(__dirname, 'data', 'studentdata.db');
const db = new Database(dbPath); // ✅ Only declare this once

// Example query: Get all student admissions
function getAllAdmissions() {
  const stmt = db.prepare('SELECT * FROM student_admissions');
  return stmt.all();
}

// Example query: Get one admission by ID
function getAdmissionById(id) {
  const stmt = db.prepare('SELECT * FROM student_admissions WHERE id = ?');
  return stmt.get(id);
}

module.exports = {
  getAllAdmissions,
  getAdmissionById,
};
