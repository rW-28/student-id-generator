document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("display-name").textContent = localStorage.getItem("name");
    document.getElementById("display-date-of-birth").textContent = localStorage.getItem("date-of-birth");
    document.getElementById("display-university-course-name").textContent = localStorage.getItem("university-course-name");
    document.getElementById("display-phone-number").textContent = localStorage.getItem("phone-number");
    document.getElementById("user-photo").src = localStorage.getItem("photo");
    const idNumber = Math.floor(100000 + Math.random() * 99999);
    document.getElementById("id-number").textContent = `#${idNumber}`;
});