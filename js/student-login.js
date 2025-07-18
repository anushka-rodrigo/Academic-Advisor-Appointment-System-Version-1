document.getElementById("login-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("../php/student_login.php", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.success) {
        localStorage.setItem('student_id', data.student_id);
        window.location.href = "../html/studentDashBoard.html";
    } else {
        alert(`Login failed: ${data.error}`);
    }
});
