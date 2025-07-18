document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("../php/advisor-login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) {
        localStorage.setItem('advisor_id', data.advisor_id);
        window.location.href = "../html/AdvisorDashBoard.html";
    } else {
        alert(`Login failed: ${data.error}`);
    }

});