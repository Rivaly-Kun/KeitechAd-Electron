

document.addEventListener('DOMContentLoaded', () => {
  const addCarBtn = document.getElementById('addCarBtn');

  if (!addCarBtn) {
    console.warn('Button #addCarBtn not found ‑‑ check the HTML.');
    return;
  }

  addCarBtn.addEventListener('click', () => {
    Swal.fire({
      title: 'Learner’s Profile Form',
      width: '90%',
      html: `
        <form id="learnerForm" style="text-align: left; max-height: 60vh; overflow-y: auto;">
          <input class="swal2-input" name="course_qualification" placeholder="Course/Qualification">

          <label><b>1.1 Unique Learner Identifier (ULI)</b></label><br>
          <input class="swal2-input" name="uli_number" placeholder="ULI Number">
          <input class="swal2-input" name="entry_date" placeholder="Entry Date">

          <hr>
          <h3>2. Manpower Profile</h3>
          <label>Name:</label><br>
          <input class="swal2-input" name="last_name" placeholder="Last">
          <input class="swal2-input" name="first_name" placeholder="First">
          <input class="swal2-input" name="middle_name" placeholder="Middle"><br>

          <label>Complete Permanent Mailing Address:</label><br>
          <input class="swal2-input" name="street_number" placeholder="Number, Street">
          <input class="swal2-input" name="barangay" placeholder="Barangay">
          <input class="swal2-input" name="district" placeholder="District"><br>
          <input class="swal2-input" name="city_municipality_complete" placeholder="City/Municipality">
          <input class="swal2-input" name="province_complete" placeholder="Province">
          <input class="swal2-input" name="region_complete" placeholder="Region"><br>

          <input class="swal2-input" name="email_facebook" placeholder="Email Address / Facebook Account">
          <input class="swal2-input" name="contact_number" placeholder="Contact No.">
          <input class="swal2-input" name="nationality" placeholder="Nationality">

          <hr>
          <h3>3. Personal Information</h3>
          <label>Sex:</label><br>
          <label><input type="radio" name="sex" value="Male"> Male</label>
          <label><input type="radio" name="sex" value="Female"> Female</label><br>

          <label>Civil Status:</label><br>
          <label><input type="checkbox" name="civil_status_single"> Single</label>
          <label><input type="checkbox" name="civil_status_married"> Married</label>
          <label><input type="checkbox" name="civil_status_widowed"> Widow/er</label>
          <label><input type="checkbox" name="civil_status_separated"> Separated</label><br>

          <label>Employment Status (before the training):</label><br>
          <label><input type="checkbox" name="employment_status_employed"> Employed</label>
          <label><input type="checkbox" name="employment_status_unemployed"> Unemployed</label><br>
          <input class="swal2-input" name="job_title" placeholder="Job Title">
          <input class="swal2-input" name="work_address" placeholder="Work Address">

          <label>Birthdate:</label><br>
          <input class="swal2-input" name="birth_month" placeholder="Month">
          <input class="swal2-input" name="birth_day" placeholder="Day">
          <input class="swal2-input" name="birth_year" placeholder="Year">
          <input class="swal2-input" name="age" placeholder="Age"><br>

          <label>Birthplace:</label><br>
          <input class="swal2-input" name="birth_place_city" placeholder="City/Municipality">
          <input class="swal2-input" name="birth_place_province" placeholder="Province">
          <input class="swal2-input" name="birth_place_region" placeholder="Region">

          <hr>
          <h3>3.5 Educational Attainment</h3>
          <label><input type="checkbox" name="education_no_grade"> No Grade Completed</label>
          <label><input type="checkbox" name="education_preschool"> Pre-School</label>
          <label><input type="checkbox" name="education_elementary_undergrad"> Elementary Undergraduate</label>
          <label><input type="checkbox" name="education_high_school_undergrad"> High School Undergraduate</label><br>
          <label><input type="checkbox" name="education_high_school_graduate"> High School Graduate</label>
          <label><input type="checkbox" name="education_post_secondary"> Post Secondary</label>
          <label><input type="checkbox" name="education_college_undergrad"> College Undergraduate</label>
          <label><input type="checkbox" name="education_college_graduate"> College Graduate or Higher</label><br>
          <input class="swal2-input" name="school_last_attended" placeholder="School Last Attended">
          <input class="swal2-input" name="course_taken" placeholder="Course">
          <input class="swal2-input" name="school_year" placeholder="School Year">

          <hr>
          <h3>4. Learner/Student Classification</h3>
          <label><input type="checkbox" name="classification_pwd"> PWD</label>
          <label><input type="checkbox" name="classification_displaced_worker"> Displaced Worker (Local)</label>
          <label><input type="checkbox" name="classification_ofw"> OFW</label>
          <label><input type="checkbox" name="classification_ofw_dependent"> OFW Dependent</label><br>
          <label><input type="checkbox" name="classification_ofw_repatriate"> OFW Repatriate</label>
          <label><input type="checkbox" name="classification_trafficking_victim"> Victim of Human Trafficking</label>
          <label><input type="checkbox" name="classification_indigenous"> Indigenous People</label>
          <label><input type="checkbox" name="classification_rebel_returnee"> Rebel Returnee</label>
          <label><input type="checkbox" name="classification_solo_parent"> Solo Parent</label>
          <label><input type="checkbox" name="classification_others"> Others:</label>
          <input class="swal2-input" name="classification_others_specify" placeholder="Specify if others">

          <hr>
          <h3>5. Taken NCAE/YP4SC Before?</h3>
          <label><input type="radio" name="ncae" value="Yes"> Yes</label>
          <label><input type="radio" name="ncae" value="No"> No</label><br>
          <input class="swal2-input" name="ncae_where" placeholder="Where">
          <input class="swal2-input" name="ncae_when" placeholder="When">

          <hr>
          <h3>6. Signature</h3>
          <input class="swal2-input" name="signature_image" placeholder="Applicant's Signature">
          <input class="swal2-input" name="signature_date" placeholder="Date">

          <hr>
          <h3>Scholar Voucher (For Scholars Only)</h3>
          <input class="swal2-input" name="voucher_number" placeholder="Voucher Number">
          <label><input type="checkbox" name="voucher_twsp_regular"> TWSP-Regular</label>
          <label><input type="checkbox" name="voucher_twsp_lsi"> TWSP-LSI</label>
          <label><input type="checkbox" name="voucher_step"> STEP</label>
          <label><input type="checkbox" name="voucher_gpb"> GPB</label>
          <label><input type="checkbox" name="voucher_others"> Others</label>
          <input class="swal2-input" name="voucher_others_specify" placeholder="Other Package">
          <br><br>
          <input class="swal2-input" name="voucher_signature_image" placeholder="Scholar Signature">
          <input class="swal2-input" name="voucher_signature_date" placeholder="Date">
        </form>
      `,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      preConfirm: () => {
        const form = document.getElementById('learnerForm');
        const inputs = form.querySelectorAll('input, select');
        const result = {};

        inputs.forEach(input => {
          const name = input.name;
          if (!name) return;

          if (input.type === 'checkbox') {
            result[name] = input.checked ? 1 : 0;
          } else if (input.type === 'radio') {
            if (input.checked) {
              result[name] = input.value;
            }
          } else {
            result[name] = input.value;
          }
        });

        return result;
      }
    }).then(result => {
      if (result.isConfirmed) {
        const formData = result.value;

 window.api.insertStudent(formData)
  .then(response => {
    if (response.success) {
      Swal.fire('Success', 'Student added to database.', 'success');
    } else {
      console.error('Database Error:', response.error);
      Swal.fire('Error', 'Failed to save to database.', 'error');
    }
  });

      }
    });
  });
});