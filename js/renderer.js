window.api.getAllAdmissions().then((rows) => {
  console.log("Student Admissions:", rows);
});

window.api.getAdmissionById(1).then((student) => {
  console.log("Student ID 1:", student);
});
