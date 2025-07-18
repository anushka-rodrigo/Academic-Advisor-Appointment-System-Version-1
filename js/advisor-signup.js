document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const subject = document.getElementById("subject").selectedOptions[0].text;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    

    const response = await fetch("../php/advisor-signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, subject, email, password })
    });

    const data = await response.json();
    
    if (data.success) {
        alert(`${data.message}! You can now log in.`);
        window.location.href = "../html/advisor-login.html"; 
    } else {
        alert(`Signup failed: ${data.error}`);
    }
});


