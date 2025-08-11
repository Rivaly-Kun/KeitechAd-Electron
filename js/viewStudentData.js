document.addEventListener('DOMContentLoaded', async () => {
  const students = await window.api.getAllAdmissions();
  const tableBody = document.getElementById('VerifiedUsers');
  tableBody.innerHTML = '';

  students.forEach(student => {
    const tr = document.createElement('tr');
    const fullName = `${student.last_name || ''}, ${student.first_name || ''} ${student.middle_name || ''}`.trim();
    const status = student.uli_number ? 'Verified' : 'Pending';

    tr.innerHTML = `
      <td>${fullName}</td>
      <td>${student.email_facebook || ''}</td>
      <td>${student.contact_number || ''}</td>
      <td>${student.course_qualification || ''}</td>
      <td>${student.uli_number || ''}</td>
      <td>${status}</td>
      <td>
        <button class="view-btn" data-id="${student.id}">View</button>
      </td>
    `;

    tableBody.appendChild(tr);
  });

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const studentId = btn.getAttribute('data-id');

    // Get student from DB
    const student = await window.api.getAdmissionById(studentId);

    // Build image paths (relative to your app)
const baseDir = "C:\\Users\\asses\\OneDrive\\Desktop\\keitechaddmission\\KeitechAd-Electron";

const idPicPath = student.id_picture 
    ? `${baseDir}\\${student.id_picture}`
    : null;

const sig1Path = student.signature_image 
    ? `${baseDir}\\${student.signature_image}`
    : null;

const sig2Path = student.voucher_signature_image 
    ? `${baseDir}\\${student.voucher_signature_image}`
    : null;


      Swal.fire({
        title: 'Registration Form',
        width: '90%',
        html: `
  <style>
    #learnerForm {
      font-family: Arial, sans-serif;
      font-size: 14px;
      text-align: left;
      max-height: 70vh;
      overflow-y: auto;
      padding: 10px;
      position: relative; /* ensures #idPictureBox is contained */
    }
    #learnerForm h2 {
      text-align: center;
      margin-bottom: 35px;
      font-size: 20px;
    }
    #learnerForm h3 {
      border-bottom: 1px solid #aaa;
      padding-bottom: 0.2em;
      margin-top: 1.2em;
      margin-bottom: 0.6em;
      font-size: 16px;
    }
    #learnerForm label {
      display: block;
      margin-top: 0.4em;
      font-weight: 500;
    }
    #learnerForm .section-box {
      border: 1px solid #ccc;
      border-radius: 6px;
      padding: 12px;
      margin-bottom: 20px;
    }
    /* Default input groups: 4 per row */
    #learnerForm .input-group {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 12px;
    }
    #learnerForm .input-group .swal2-input {
      flex: 1 1 calc(25% - 12px); /* 4 in a row */
      min-width: 150px;
      max-width: calc(25% - 12px);
      margin: 0;
    }
    /* For scholarship section: force stacking vertically */
    #learnerForm .scholarship-group .swal2-input {
      flex: 1 1 100%;
      max-width: 100%;
      margin: 0 0 10px 0;
    }
    #learnerForm .checkbox-group label,
    #learnerForm .radio-group label {
      display: inline-block;
      margin-right: 16px;
    }
    #learnerForm .swal2-input {
      width: 85%;
      margin: 20px;
      box-sizing: border-box;
    }
    /* ID picture placement fixed with margin and object-fit */
    #idPictureBox {
      position: absolute;
      top: 67px;
      right: 10px;
      width: 180px;
      height: 200px;
      border: 1px solid #333;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      background-color: #fff;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      overflow: hidden;

    }
    #idPictureBox img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* makes picture fill neatly */
    }
    /* Responsive: move ID picture below form on small screens */
    @media (max-width: 600px) {
      #idPictureBox {
        position: relative;
        top: auto;
        right: auto;
        margin: 20px auto 0 auto;
      }
    }
  </style>

  <form id="learnerForm">
    <div id="idPictureBox">I.D. Picture</div>
    <h2>LEARNER'S PROFILE FORM</h2>

    <!-- Course/Qualification -->
    <div class="input-group">
      <input class="swal2-input" name="course_qualification" placeholder="Course/Qualification" value="${student.course_qualification}">
    </div>

    <!-- Section 1 -->
    <div class="section-box">
      <h3>1. Web-Based Information</h3>
      <label>1.1 Unique Learner Identifier (ULI)</label>
      <div class="input-group">
        <input class="swal2-input" name="uli_number" placeholder="ULI Number" value="${student.uli_number}">
      </div>
      <label>1.2 Entry Date</label>
      <div class="input-group">
        <input type="date" class="swal2-input" name="entry_date" placeholder="Entry Date" value="${student.entry_date}">
      </div>
    </div>

    <!-- Section 2: Manpower Profile -->
    <div class="section-box">
      <h3>2. Manpower Profile</h3>
      <label>2.1 Name:</label>
      <div class="input-group">
        <input class="swal2-input" name="last_name" placeholder="Last" value="${student.last_name}">
        <input class="swal2-input" name="first_name" placeholder="First" value="${student.first_name}">
        <input class="swal2-input" name="middle_name" placeholder="Middle" value="${student.middle_name}">
      </div>
      <label>2.2 Complete Mailing Address:</label>
      <div class="input-group">
        <input class="swal2-input" name="street_number" placeholder="Number, Street" value="${student.street_mailing || student.street_number}">
        <input class="swal2-input" name="barangay" placeholder="Barangay" value="${student.barangay}">
        <input class="swal2-input" name="district" placeholder="District" value="${student.district}">
        <input class="swal2-input" name="city_municipality_complete" placeholder="City/Municipality" value="${student.city_municipality_mailing || student.city_municipality_complete}">
        <input class="swal2-input" name="province_complete" placeholder="Province" value="${student.province_mailing || student.province_complete}">
        <input class="swal2-input" name="region_complete" placeholder="Region" value="${student.region_mailing || student.region_complete}">
      </div>
      <div class="input-group">
        <input class="swal2-input" name="email_facebook" placeholder="Email / Facebook" value="${student.email_facebook}">
        <input class="swal2-input" name="contact_number" placeholder="Contact Number" value="${student.contact_number}">
        <input class="swal2-input" name="nationality" placeholder="Nationality" value="${student.nationality}">
      </div>
    </div>

    <!-- Section 3: Personal Information -->
    <div class="section-box">
      <h3>3. Personal Information</h3>
      <label>3.1 Sex:</label>
      <div class="radio-group">
        <label><input type="radio" name="sex" value="Male" ${student.sex === 'Male' ? 'checked' : ''}> Male</label>
        <label><input type="radio" name="sex" value="Female" ${student.sex === 'Female' ? 'checked' : ''}> Female</label>
      </div>
      <label>3.2 Civil Status:</label>
      <div class="radio-group">
        <select name="civil_status" required>
          <option value="Single" ${student.civil_status === 'Single' ? 'selected' : ''}>Single</option>
          <option value="Married" ${student.civil_status === 'Married' ? 'selected' : ''}>Married</option>
          <option value="Widowed" ${student.civil_status === 'Widowed' ? 'selected' : ''}>Widowed</option>
          <option value="Separated" ${student.civil_status === 'Separated' ? 'selected' : ''}>Separated</option>
        </select>
      </div>
      <label>3.3 Employment Status:</label>
      <div class="radio-group">
        <select name="employment_status" required>
          <option value="Employed" ${student.employment_status === 'Employed' ? 'selected' : ''}>Employed</option>
          <option value="Unemployed" ${student.employment_status === 'Unemployed' ? 'selected' : ''}>Unemployed</option>
        </select>
      </div>
      <div class="input-group">
        <input class="swal2-input" name="job_title" placeholder="Job Title" value="${student.job_title}">
        <input class="swal2-input" name="work_address" placeholder="Work Address" value="${student.work_address}">
      </div>
      <label>3.4 Birth Details:</label>
      <div class="input-group">
        <input class="swal2-input" name="birth_month" placeholder="Month" value="${student.birth_month}">
        <input class="swal2-input" name="birth_day" placeholder="Day" value="${student.birth_day}">
        <input class="swal2-input" name="birth_year" placeholder="Year" value="${student.birth_year}">
        <input class="swal2-input" name="age" placeholder="Age" value="${student.age}">
      </div>
      <label>Birthplace:</label>
      <div class="input-group">
        <input class="swal2-input" name="birth_place_city" placeholder="City/Municipality" value="${student.birth_place_city}">
        <input class="swal2-input" name="birth_place_province" placeholder="Province" value="${student.birth_place_province}">
        <input class="swal2-input" name="birth_place_region" placeholder="Region" value="${student.birth_place_region}">
      </div>
      <h3>3.5 Educational Attainment</h3>
      <div class="checkbox-group">
        <label><input type="checkbox" name="education_no_grade" ${student.education_no_grade ? 'checked' : ''}> No Grade</label>
        <label><input type="checkbox" name="education_preschool" ${student.education_preschool ? 'checked' : ''}> Preschool</label>
        <label><input type="checkbox" name="education_elementary_undergrad" ${student.education_elementary_undergrad ? 'checked' : ''}> Elementary (Undergrad)</label>
        <label><input type="checkbox" name="education_high_school_undergrad" ${student.education_high_school_undergrad ? 'checked' : ''}> High School (Undergrad)</label>
        <label><input type="checkbox" name="education_high_school_graduate" ${student.education_high_school_graduate ? 'checked' : ''}> High School Graduate</label>
        <label><input type="checkbox" name="education_post_secondary" ${student.education_post_secondary ? 'checked' : ''}> Post-Secondary</label>
        <label><input type="checkbox" name="education_college_undergrad" ${student.education_college_undergrad ? 'checked' : ''}> College (Undergrad)</label>
        <label><input type="checkbox" name="education_college_graduate" ${student.education_college_graduate ? 'checked' : ''}> College Graduate</label>
      </div>

      <div class="form-group">
        <label for="school_last_attended">School Last Attended</label>
        <input type="text" name="school_last_attended" id="school_last_attended" value="${student.school_last_attended}" required>
      </div>

      <div class="form-group">
        <label for="course_taken">Course Taken</label>
        <input type="text" name="course_taken" id="course_taken" value="${student.course_taken}">
      </div>

      <div class="form-group">
        <label for="school_year">School Year</label>
        <input type="text" name="school_year" id="school_year" value="${student.school_year}">
      </div>
    </div>

    <!-- Section 4: Learner Classification -->
    <div class="section-box">
      <h3>4. Learner Classification</h3>
      <div class="checkbox-group">
        <label><input type="checkbox" name="classification_pwd" ${student.classification_pwd ? 'checked' : ''}> PWD</label>
        <label><input type="checkbox" name="classification_displaced_worker" ${student.classification_displaced_worker ? 'checked' : ''}> Displaced Worker</label>
        <label><input type="checkbox" name="classification_ofw" ${student.classification_ofw ? 'checked' : ''}> OFW</label>
        <label><input type="checkbox" name="classification_ofw_dependent" ${student.classification_ofw_dependent ? 'checked' : ''}> OFW Dependent</label>
        <label><input type="checkbox" name="classification_indigenous" ${student.classification_indigenous ? 'checked' : ''}> Indigenous People</label>
        <label><input type="checkbox" name="classification_rebel_returnee" ${student.classification_rebel_returnee ? 'checked' : ''}> Rebel Returnee</label>
        <label><input type="checkbox" name="classification_ofw_repatriate" ${student.classification_ofw_repatriate ? 'checked' : ''}> OFW Repatriate</label>
        <label><input type="checkbox" name="classification_trafficking_victim" ${student.classification_trafficking_victim ? 'checked' : ''}> Trafficking Victim</label>
        <label><input type="checkbox" name="classification_solo_parent" ${student.classification_solo_parent ? 'checked' : ''}> Solo Parent</label>
        <label><input type="checkbox" name="classification_others" ${student.classification_others ? 'checked' : ''}> Others</label>
      </div>

      <input class="swal2-input" name="classification_others_specify" placeholder="Specify Others" value="${student.classification_others_specify}">
    </div>

    <!-- Section 5: NCAE/YP4SC -->
    <div class="section-box">
      <h3>5. Taken NCAE/YP4SC?</h3>
      <div class="radio-group">
        <label><input type="radio" name="ncae_before" value="Yes" ${student.ncae_where ? 'checked' : ''}> Yes</label>
        <label><input type="radio" name="ncae_before" value="No" ${!student.ncae_where ? 'checked' : ''}> No</label>
      </div>
      <div class="input-group">
        <input class="swal2-input" name="ncae_where" placeholder="Where" value="${student.ncae_where}">
        <input class="swal2-input" name="ncae_when" placeholder="When" value="${student.ncae_when}">
      </div>
    </div>

    <!-- Section 6: Applicant Signature -->
    <div class="section-box">
      <h3>6. Applicant's Signature</h3>
      <div class="input-group">
        <div>
          <canvas id="signaturePad1" width="300" height="150" style="border:1px solid #000;"></canvas>
          <button type="button" id="clearSignature1">Clear</button>
        </div>
        <input type="hidden" name="signature_image" value="${student.signature_image}">
        <input class="swal2-input" name="signature_date" placeholder="Signature Date" value="${student.signature_date}">
      </div>
      <p style="font-size:12px; font-style:italic;">
        I certify that the information provided is true and correct.
      </p>
    </div>

    <!-- Scholarship Section -->
    <div class="section-box">
      <h3>Scholarship Section</h3>
      <input class="swal2-input" name="voucher_number" placeholder="Voucher Number" value="${student.voucher_number}">
      <div class="checkbox-group">
        <label><input type="checkbox" name="voucher_twsp_regular" ${student.voucher_twsp_regular ? 'checked' : ''}> TWSP Regular</label>
        <label><input type="checkbox" name="voucher_twsp_lsi" ${student.voucher_twsp_lsi ? 'checked' : ''}> TWSP LSI</label>
        <label><input type="checkbox" name="voucher_step" ${student.voucher_step ? 'checked' : ''}> STEP</label>
        <label><input type="checkbox" name="voucher_gpb" ${student.voucher_gpb ? 'checked' : ''}> GPB</label>
        <label><input type="checkbox" name="voucher_others" ${student.voucher_others ? 'checked' : ''}> Others</label>
      </div>
      <input class="swal2-input" name="voucher_others_specify" placeholder="Specify Other Package" value="${student.voucher_others_specify}">
      <div class="input-group">
        <canvas id="signaturePad2" width="300" height="150" style="border:1px solid #000;"></canvas>
        <button type="button" id="clearSignature2">Clear</button>
        <input type="hidden" name="voucher_signature_image" value="${student.voucher_signature_image}">
        <input class="swal2-input" name="voucher_signature_date" placeholder="Voucher Signature Date" value="${student.voucher_signature_date}">
      </div>
    </div>
</form>
        `,
        showCancelButton: true,
        confirmButtonText: 'Submit',

        didOpen: () => {
        // console.log('Swal dialog opened'); // ✅ ADDED
        //  alert('Form dialog opened'); // ✅ ADDED

          const canvas1 = document.getElementById('signaturePad1');
          const signaturePad1 = new SignaturePad(canvas1);
          document.getElementById('clearSignature1').addEventListener('click', () => {
            signaturePad1.clear();
            console.log('SignaturePad1 cleared'); // ✅ ADDED
          });
          canvas1.signaturePad = signaturePad1;

          const canvas2 = document.getElementById('signaturePad2');
          const signaturePad2 = new SignaturePad(canvas2);
          document.getElementById('clearSignature2').addEventListener('click', () => {
            signaturePad2.clear();
            console.log('SignaturePad2 cleared'); // ✅ ADDED
          });
          canvas2.signaturePad = signaturePad2;

          const idPictureBox = document.getElementById('idPictureBox');
          const fileInput = document.createElement('input');
          fileInput.type = 'file';
          fileInput.accept = 'image/*';

          fileInput.addEventListener('change', () => {
            const file = fileInput.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function (e) {
              idPictureBox.dataset.base64 = e.target.result;
              idPictureBox.innerHTML = `<img src="${e.target.result}" style="max-width:100px; max-height:100px;">`;

              console.log('ID picture uploaded'); // ✅ ADDED
            };
            reader.readAsDataURL(file);
          });

          idPictureBox.addEventListener('click', () => {
           // console.log('ID picture box clicked'); // ✅ ADDED
            fileInput.click();
          });
        },


  preConfirm: () => {
    const form = document.getElementById('learnerForm');
    const inputs = form.querySelectorAll('input, select');
    const result = {};

  if (!form) {
    Swal.showValidationMessage('Form not found.');
    return false;
  }


    inputs.forEach(input => {
      const name = input.name;
      if (!name) return;

      if (input.type === 'checkbox') {
        result[name] = input.checked ? 1 : 0;
      } else if (input.type === 'radio') {
        if (input.checked) result[name] = input.value;
      } else {
        result[name] = input.value;
      }
    });

    const uid = crypto.randomUUID();
    result.uid = uid;

    const signatureCanvas1 = document.getElementById('signaturePad1');
    const signatureCanvas2 = document.getElementById('signaturePad2');
    const pad1 = signatureCanvas1.signaturePad;
    const pad2 = signatureCanvas2.signaturePad;

    result.signature_image = pad1.isEmpty() ? '' : pad1.toDataURL();
    result.voucher_signature_image = pad2.isEmpty() ? '' : pad2.toDataURL();

    const idPictureBox = document.getElementById('idPictureBox');
    const idPictureBase64 = idPictureBox.dataset.base64 || '';

    if (!idPictureBase64) {
      Swal.showValidationMessage('Please upload an I.D. picture.');
      return false;
    }

    result.id_picture = idPictureBase64;

    // ✅ Asynchronous DB call with validation
    return window.api.insertStudent(result)
      .then(response => {
        if (response.success) {
          return result;
        } else {
          console.error('Database Error:', response.error);
          Swal.showValidationMessage('Failed to save to database.');
          return false;
        }
      })
      .catch(error => {
        console.error('Unexpected Error:', error);
        Swal.showValidationMessage('An unexpected error occurred.');
        return false;
      });
  }
  }).then(result => {
  if (result.value) {
    Swal.fire('Success', 'Student added to database.', 'success');
  }

  });
  });
});
});
