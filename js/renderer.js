window.api.getAllAdmissions().then((rows) => {
  console.log("Student Admissions:", rows);
});


document.addEventListener('DOMContentLoaded', async () => {
  try {
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

  } catch (err) {
    console.error('Error loading students:', err);
  }
});



