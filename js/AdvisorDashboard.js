window.addEventListener("DOMContentLoaded", async () => {

    const advisorId = localStorage.getItem('advisor_id');

    console.log(advisorId);
    

    if (!advisorId) {
        alert("You must be logged in to view this page.");
        window.location.href = "../html/advisor-login.html";
        return;
    }

    const res = await fetch("../php/AdvisorDashBoard.php", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ advisor_id: advisorId })
    });

    const sessions = await res.json();

    document.querySelector(".profile-name").textContent = sessions[0].advisor_first_name + " " + sessions[0].advisor_last_name;
    document.querySelector(".subject-name").textContent = sessions[0].Subject;
    document.querySelector(".profile-email").textContent = sessions[0].advisor_email;

    const classContainer = document.querySelector(".session-container");
    classContainer.innerHTML = ""; // clear existing

    sessions.forEach(session => {

        const classDiv = document.createElement("div");
        classDiv.classList.add("session");

        classDiv.innerHTML = `
            <h3>${session.Subject}</h3>
            <p><span>Student: </span>${session.student_first_name} ${session.student_last_name}</p>
            <div class="session-time">
            <img src="../img/clock_13403640.png" alt="" class="clock-icon">
            <p>${formatTime(session.session_time)}</p>
            </div>
            <button>Start Session</button>
        `;

        classContainer.appendChild(classDiv);
    });


});

function formatTime(timeStr) {
    const [hour, minute, second] = timeStr.split(":");
    let hourNum = parseInt(hour);
    const suffix = hourNum >= 12 ? "PM" : "AM";
    hourNum = hourNum % 12 || 12;
    return `${String(hourNum).padStart(2, '0')}:${minute}:${second} ${suffix}`;
}


document.getElementById("logout-btn").addEventListener("click", () => {
    alert("You have been logged out.");
    localStorage.removeItem('advisor_id');
    window.location.href = "../html/advisor-login.html";
});