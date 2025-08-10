const path = require('node:path');
const Database = require('better-sqlite3');

const dbPath = path.join(__dirname, 'data', 'studentdata.db');
const db = new Database(dbPath);

// Logging the DB path for confirmation
console.log('Using database:', dbPath);

function insertStudent(data) {
  try {
    console.log('Inserting student with UID:', data.uid || '[no uid]');
    console.log('Data keys:', Object.keys(data));

    const stmt = db.prepare(`
      INSERT INTO student_admissions (
        course_qualification,
        uli_number,
        entry_date,
        last_name,
        first_name,
        middle_name,
        street_number,
        barangay,
        district,
        city_municipality_complete,
        province_complete,
        region_complete,
        email_facebook,
        contact_number,
        nationality,
        sex,
        civil_status,
        employment_status,
        job_title,
        work_address,
        birth_month,
        birth_day,
        birth_year,
        age,
        birth_place_city,
        birth_place_province,
        birth_place_region,
        education_no_grade,
        education_high_school_graduate,
        education_preschool,
        education_post_secondary,
        education_high_school_undergrad,
        education_college_graduate,
        education_elementary_undergrad,
        education_college_undergrad,
        school_last_attended,
        course_taken,
        school_year,
        classification_pwd,
        classification_displaced_worker,
        classification_ofw,
        classification_ofw_dependent,
        classification_indigenous,
        classification_rebel_returnee,
        classification_ofw_repatriate,
        classification_trafficking_victim,
        classification_solo_parent,
        classification_others,
        classification_others_specify,
        ncae_when,
        ncae_where,
        signature_image,
        signature_date,
        voucher_number,
        voucher_twsp_lsi,
        voucher_twsp_regular,
        voucher_gpb,
        voucher_others,
        voucher_others_specify,
        voucher_signature_image,
        voucher_signature_date,
        id_picture
      )
      VALUES (
        @course_qualification,
        @uli_number,
        @entry_date,
        @last_name,
        @first_name,
        @middle_name,
        @street_number,
        @barangay,
        @district,
        @city_municipality_complete,
        @province_complete,
        @region_complete,
        @email_facebook,
        @contact_number,
        @nationality,
        @sex,
        @civil_status,
        @employment_status,
        @job_title,
        @work_address,
        @birth_month,
        @birth_day,
        @birth_year,
        @age,
        @birth_place_city,
        @birth_place_province,
        @birth_place_region,
        @education_no_grade,
        @education_high_school_graduate,
        @education_preschool,
        @education_post_secondary,
        @education_high_school_undergrad,
        @education_college_graduate,
        @education_elementary_undergrad,
        @education_college_undergrad,
        @school_last_attended,
        @course_taken,
        @school_year,
        @classification_pwd,
        @classification_displaced_worker,
        @classification_ofw,
        @classification_ofw_dependent,
        @classification_indigenous,
        @classification_rebel_returnee,
        @classification_ofw_repatriate,
        @classification_trafficking_victim,
        @classification_solo_parent,
        @classification_others,
        @classification_others_specify,
        @ncae_when,
        @ncae_where,
        @signature_image,
        @signature_date,
        @voucher_number,
        @voucher_twsp_lsi,
        @voucher_twsp_regular,
        @voucher_gpb,
        @voucher_others,
        @voucher_others_specify,
        @voucher_signature_image,
        @voucher_signature_date,
        @id_picture
      )
    `);

    const result = stmt.run(data);
    console.log('Insert successful. Row ID:', result.lastInsertRowid);
    return result;
  } catch (err) {
    console.error('❌ INSERT FAILED:', err.message);
    console.error('Failed data object:', data);
    throw err;
  }
}


function getAllAdmissions() {
  return db.prepare('SELECT * FROM student_admissions').all();
}

function getAdmissionById(id) {
  return db.prepare('SELECT * FROM student_admissions WHERE id = ?').get(id);
}

module.exports = {
  insertStudent,
  getAllAdmissions,
  getAdmissionById
};
