document.getElementById("signup-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("../php/student-signup.php", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ firstname, lastname, email, password })
    });

    const data = await res.json();

    if (data.success) {
        alert(`${data.message}! You can now log in.`);
        window.location.href = "../html/student-login.html"; 
    } else {
        alert(`Signup failed: ${data.error}`);
    }
});

