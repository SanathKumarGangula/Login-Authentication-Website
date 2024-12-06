const validCredentials = {
    username: "sunny",
    password: "0928"
};

// Form submission event listener
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Simple validation
    if (username === validCredentials.username && password === validCredentials.password) {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
});
