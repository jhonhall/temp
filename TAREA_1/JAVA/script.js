const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

function clicLogin() {
    alert("🔘 Hiciste clic en el botón Login");
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (email.value === "" || password.value === "") {
        msg.textContent = "⚠️ Debes llenar todos los campos.";
        msg.style.color = "red";
    } else if (email.value === "admin" && password.value === "1234") {
        msg.textContent = "✅ Bienvenido " + email.value + "!";
        msg.style.color = "green";

        setTimeout(() => {
            window.location.href = "home.html";
        }, 1500);
    } else {
        msg.textContent = "❌ Usuario o contraseña incorrectos.";
        msg.style.color = "red";
    }
});
