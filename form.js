console.log("JS работает!");
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("full-name").value;
    const dateOfBirth = document.getElementById("date-of-birth").value;
    const courseName = document.getElementById("university-course-name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const photo = document.getElementById("photo").files[0];

    const reader = new FileReader();

    reader.onload = function() {
        localStorage.setItem("name", name);
        localStorage.setItem("date-of-birth", dateOfBirth);
        localStorage.setItem("university-course-name", courseName);
        localStorage.setItem("phone-number", phoneNumber);
        localStorage.setItem("photo", reader.result);

        window.location.href = "ticket.html";
    };
    if (photo) {
        reader.readAsDataURL(photo);
      }
});
