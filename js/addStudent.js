  document.addEventListener('DOMContentLoaded', () => {
    const addCarBtn = document.getElementById('addCarBtn');

    if (!addCarBtn) {
      console.warn('Button #addCarBtn not found — check the HTML.');
      return;
    }

    addCarBtn.addEventListener('click', () => {
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
      <input class="swal2-input" name="course_qualification" placeholder="Course/Qualification">
    </div>

    <!-- Section 1 -->
    <div class="section-box">
      <h3>1. Web-Based Information</h3>
      <label>1.1 Unique Learner Identifier (ULI)</label>
      <div class="input-group">
        <input class="swal2-input" name="uli_number" placeholder="ULI Number">
      </div>
      <label>1.2 Entry Date</label>
      <div class="input-group">
        <input type="date" class="swal2-input" name="entry_date" placeholder="Entry Date">
      </div>
    </div>

    <!-- Section 2: Manpower Profile -->
    <div class="section-box">
      <h3>2. Manpower Profile</h3>
      <label>2.1 Name:</label>
      <div class="input-group">
        <input class="swal2-input" name="last_name" placeholder="Last">
        <input class="swal2-input" name="first_name" placeholder="First">
        <input class="swal2-input" name="middle_name" placeholder="Middle">
      </div>
      <label>2.2 Complete Mailing Address:</label>
      <div class="input-group">
        <input class="swal2-input" name="street_number" placeholder="Number, Street">
        <input class="swal2-input" name="barangay" placeholder="Barangay">
        <input class="swal2-input" name="district" placeholder="District">
        <input class="swal2-input" name="city_municipality_complete" placeholder="City/Municipality">
        <input class="swal2-input" name="province_complete" placeholder="Province">
        <input class="swal2-input" name="region_complete" placeholder="Region">
      </div>
      <div class="input-group">
        <input class="swal2-input" name="email_facebook" placeholder="Email / Facebook">
        <input class="swal2-input" name="contact_number" placeholder="Contact Number">
        <input class="swal2-input" name="nationality" placeholder="Nationality">
      </div>
    </div>

    <!-- Section 3: Personal Information -->
    <div class="section-box">
      <h3>3. Personal Information</h3>
      <label>3.1 Sex:</label>
      <div class="radio-group">
        <label><input type="radio" name="sex" value="Male"> Male</label>
        <label><input type="radio" name="sex" value="Female"> Female</label>
      </div>
      <label>3.2 Civil Status:</label>
      <div class="radio-group">
        <select name="civil_status" required>
  <option value="Single">Single</option>
  <option value="Married">Married</option>
  <option value="Widowed">Widowed</option>
  <option value="Separated">Separated</option>
</select>

      </div>
      <label>3.3 Employment Status:</label>
      <div class="radio-group">
      <select name="employment_status" required>
  <option value="Employed">Employed</option>
  <option value="Unemployed">Unemployed</option>
</select>

      </div>
      <div class="input-group">
        <input class="swal2-input" name="job_title" placeholder="Job Title">
        <input class="swal2-input" name="work_address" placeholder="Work Address">
      </div>
      <label>3.4 Birth Details:</label>
      <div class="input-group">
        <input class="swal2-input" name="birth_month" placeholder="Month">
        <input class="swal2-input" name="birth_day" placeholder="Day">
        <input class="swal2-input" name="birth_year" placeholder="Year">
        <input class="swal2-input" name="age" placeholder="Age">
      </div>
      <label>Birthplace:</label>
      <div class="input-group">
        <input class="swal2-input" name="birth_place_city" placeholder="City/Municipality">
        <input class="swal2-input" name="birth_place_province" placeholder="Province">
        <input class="swal2-input" name="birth_place_region" placeholder="Region">
      </div>
     <h3>3.5 Educational Attainment</h3>
<div class="checkbox-group">
  <label><input type="checkbox" name="education_no_grade"> No Grade</label>
  <label><input type="checkbox" name="education_preschool"> Preschool</label>
  <label><input type="checkbox" name="education_elementary_undergrad"> Elementary (Undergrad)</label>
  <label><input type="checkbox" name="education_high_school_undergrad"> High School (Undergrad)</label>
  <label><input type="checkbox" name="education_high_school_graduate"> High School Graduate</label>
  <label><input type="checkbox" name="education_post_secondary"> Post-Secondary</label>
  <label><input type="checkbox" name="education_college_undergrad"> College (Undergrad)</label>
  <label><input type="checkbox" name="education_college_graduate"> College Graduate</label>
</div>

<!-- 🆕 Added missing fields below -->
<div class="form-group">
  <label for="school_last_attended">School Last Attended</label>
  <input type="text" name="school_last_attended" id="school_last_attended" required>
</div>

<div class="form-group">
  <label for="course_taken">Course Taken</label>
  <input type="text" name="course_taken" id="course_taken">
</div>

<div class="form-group">
  <label for="school_year">School Year</label>
  <input type="text" name="school_year" id="school_year">
</div>




    </div>

    <!-- Section 4: Learner Classification -->
    <div class="section-box">
    <h3>4. Learner Classification</h3>
<div class="checkbox-group">
  <label><input type="checkbox" name="classification_pwd"> PWD</label>
  <label><input type="checkbox" name="classification_displaced_worker"> Displaced Worker</label>
  <label><input type="checkbox" name="classification_ofw"> OFW</label>
  <label><input type="checkbox" name="classification_ofw_dependent"> OFW Dependent</label>
  <label><input type="checkbox" name="classification_indigenous"> Indigenous People</label>
  <label><input type="checkbox" name="classification_rebel_returnee"> Rebel Returnee</label>
  <label><input type="checkbox" name="classification_ofw_repatriate"> OFW Repatriate</label>
  <label><input type="checkbox" name="classification_trafficking_victim"> Trafficking Victim</label>
  <label><input type="checkbox" name="classification_solo_parent"> Solo Parent</label>
  <label><input type="checkbox" name="classification_others"> Others</label>
</div>

<input class="swal2-input" name="classification_others_specify" placeholder="Specify Others">

    </div>

    <!-- Section 5: NCAE/YP4SC -->
    <div class="section-box">
      <h3>5. Taken NCAE/YP4SC?</h3>
      <div class="radio-group">
        <label><input type="radio" name="ncae_before" value="Yes"> Yes</label>
        <label><input type="radio" name="ncae_before" value="No"> No</label>
      </div>
      <div class="input-group">
        <input class="swal2-input" name="ncae_where" placeholder="Where">
        <input class="swal2-input" name="ncae_when" placeholder="When">
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
        <input type="hidden" name="signature_image">
        <input class="swal2-input" name="signature_date" placeholder="Signature Date">
      </div>
      <p style="font-size:12px; font-style:italic;">
        I certify that the information provided is true and correct.
      </p>
    </div>

    <!-- Scholarship Section -->
    <div class="section-box">
      <h3>Scholarship Section</h3>
      <input class="swal2-input" name="voucher_number" placeholder="Voucher Number">
      <div class="checkbox-group">
        <label><input type="checkbox" name="voucher_twsp_regular"> TWSP Regular</label>
        <label><input type="checkbox" name="voucher_twsp_lsi"> TWSP LSI</label>
        <label><input type="checkbox" name="voucher_step"> STEP</label>
        <label><input type="checkbox" name="voucher_gpb"> GPB</label>
        <label><input type="checkbox" name="voucher_others"> Others</label>
      </div>
      <input class="swal2-input" name="voucher_others_specify" placeholder="Specify Other Package">
      <div class="input-group">
        <canvas id="signaturePad2" width="300" height="150" style="border:1px solid #000;"></canvas>
        <button type="button" id="clearSignature2">Clear</button>
        <input type="hidden" name="voucher_signature_image">
        <input class="swal2-input" name="voucher_signature_date" placeholder="Voucher Signature Date">
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
  // Ensure SignaturePad is loaded