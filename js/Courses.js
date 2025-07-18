const modal = document.getElementById("bookSessionModal");
const openButtons = document.querySelectorAll(".book-session-btn");
const closeButton = document.getElementById("closeModal");
const bookForm = document.getElementById("bookForm");

const studentId = localStorage.getItem('student_id');

if (!studentId) {
    alert("You must be logged in to book a session.");
    window.location.href = "../html/student-login.html";
}

window.addEventListener("DOMContentLoaded", async () => {

    const studentId = localStorage.getItem('student_id');

    if (!studentId) {
        alert("You must be logged in to view this page.");
        window.location.href = "../html/student-login.html";
        return;
    }

    const res = await fetch("../php/Courses.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    })
    const sessions = await res.json();


    const classContainer = document.querySelector(".container");
    classContainer.innerHTML = "";

    sessions.forEach(session => {

        const classDiv = document.createElement("div");
        classDiv.classList.add("session-container");

        classDiv.innerHTML = `
            <img src="../img/15902.jpg" alt="profile" class="profile-pic">
            <h2>${session.Subject}</h2>
                <div class="advisor-info">
                    <img src="../img/teacher_3307318.png" alt="">
                    <p>${session.firstName} ${session.lastName}</p>
                 </div>
            <button 
                class="book-session-btn" 
                data-subject="${session.Subject}" 
                data-advisor="${session.firstName} ${session.lastName}" 
                data-advisor-id="${session.advisor_id}">
                Book a Session
            </button>`;


        classContainer.appendChild(classDiv);
    });

    classContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("book-session-btn")) {
            const subject = e.target.getAttribute("data-subject");
            const advisor = e.target.getAttribute("data-advisor");
            const advisorId = e.target.getAttribute("data-advisor-id");

            document.getElementById("modalAdvisorName").textContent = advisor;
            document.getElementById("modalSubject").textContent = subject;
            document.getElementById("advisorId").value = advisorId;

            modal.style.display = "flex";
        }
    });

    const exploreBtn = document.querySelector('.explore-btn');
    const container = document.querySelector('.container');

    exploreBtn.addEventListener('click', function () {
        container.scrollIntoView({ behavior: 'smooth' });
    });
});



closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});


bookForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const advisorId = document.getElementById("advisorId").value;
    const date = document.getElementById("sessionDate").value;
    const time = document.getElementById("sessionTime").value;

    const response = await fetch("../php/book_session.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ student_id: studentId, advisor_id: advisorId, date, time })
    });

    const result = await response.json();
    if (result.success) {
        alert("Session Booked!");
        modal.style.display = "none";
        bookForm.reset();
    } else {
        alert(result.error);
    }
});



document.getElementById("logout-btn").addEventListener("click", () => {
    alert("You have been logged out.");
    localStorage.removeItem('student_id');
    window.location.href = "../html/student-login.html";
});