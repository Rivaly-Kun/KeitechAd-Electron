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
    const idPicPath = student.id_picture ? `./${student.id_picture}` : null;
    const sig1Path = student.signature_image ? `./${student.signature_image}` : null;
    const sig2Path = student.voucher_signature_image ? `./${student.voucher_signature_image}` : null;

    // SweetAlert content
    Swal.fire({
      title: `${student.first_name} ${student.last_name}`,
      html: `
        <p><strong>Email/Facebook:</strong> ${student.email_facebook || 'N/A'}</p>
        <p><strong>Contact #:</strong> ${student.contact_number || 'N/A'}</p>
        <p><strong>Course:</strong> ${student.course_qualification || 'N/A'}</p>
        <p><strong>ULI No.:</strong> ${student.uli_number || 'N/A'}</p>
        ${idPicPath ? `<img src="${idPicPath}" style="max-width:150px; display:block; margin:10px auto;">` : ''}
        ${sig1Path ? `<img src="${sig1Path}" style="max-width:150px; display:block; margin:10px auto;">` : ''}
        ${sig2Path ? `<img src="${sig2Path}" style="max-width:150px; display:block; margin:10px auto;">` : ''}
      `,
      width: 400,
      confirmButtonText: 'Close'
    });
  });
});
});
