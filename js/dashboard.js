window.addEventListener("DOMContentLoaded", async () => {

    const studentId = localStorage.getItem('student_id');

    if (!studentId) {
        alert("You must be logged in to view this page.");
        window.location.href = "../html/student-login.html";
        return;
    }

    const res = await fetch("../php/fetch_bookings.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ student_id: studentId })
    })
    const sessions = await res.json();

    document.querySelector(".profile-name").textContent = sessions[0].student_first_name + " " + sessions[0].student_last_name;
    document.querySelector(".profile-email").textContent = sessions[0].student_email;

    const classContainer = document.querySelector(".class-container");
    classContainer.innerHTML = "";

    sessions.forEach(session => {

        const classDiv = document.createElement("div");
        classDiv.classList.add("class");

        classDiv.innerHTML = `
            <h2>${session.Subject}</h2>
            <h4>${session.advisor_first_name} ${session.advisor_last_name}</h4>
            <hr class="class-divider">
            <div class="class-info">
                <div class="class-info-item">
                    <img src="../img/clock_13403640.png" alt="" class="clock">
                    <p>${formatTime(session.session_time)}</p>
                </div>
                <div class="class-info-item">
                    <img src="../img/number-8_10357225.png" alt="" class="clock">
                    <p>${session.session_date}</p>
                </div>
            </div>
            <div class="button-container">
                <button class="join-session-btn">Join Session</button>
                <button class="cancel-session-btn">Cancel Session</button>
            </div>
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
    localStorage.removeItem('student_id');
    window.location.href = "../html/student-login.html";
});

document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(updateTime));

function updateTime() {
    const now = new Date();

    const dayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'short' });
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.documentElement.style.setProperty('--timer-day', `"${dayFormatter.format(now)}"`);
    document.documentElement.style.setProperty('--timer-hours', `"${hours}"`);
    document.documentElement.style.setProperty('--timer-minutes', `"${minutes}"`);
    document.documentElement.style.setProperty('--timer-seconds', `"${seconds}"`);

    requestAnimationFrame(updateTime);
}
