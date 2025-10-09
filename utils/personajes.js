import { USUARIOS } from "./equipament.js"
function checkLogin() {
    const nickEscrito = document.querySelector("#username").value;
    const passEscrita = document.querySelector("#password").value;
    if (nickEscrito && passEscrita) {
        checkUser(nickEscrito, passEscrita)
    } else {
        if (!document.querySelector(".error-msg")) {
            document
                .querySelector(".envioLogin")
                .insertAdjacentHTML("beforebegin", '<p class="error-msg">Error en el usuario y/o contraseña</p>');
        }

    }
}
function checkUser(nickEscrito, passEscrita) {
    USUARIOS.forEach(user => {
        if (user.name == nickEscrito && btoa(passEscrita) == user.password) {
            const hoy = new Date().toISOString().split('T')[0];
            localStorage.setItem("usuario", nickEscrito)
            localStorage.setItem("token", btoa(nickEscrito + hoy))
            window.location.href = "./inicio.html";
            return;
        } else {
            if (!document.querySelector(".error-msg")) {
                document
                    .querySelector(".envioLogin")
                    .insertAdjacentHTML("beforebegin", '<p class="error-msg">Error en el usuario y/o contraseña</p>');
            }
        }
    });
}
document.querySelector(".envioLogin").addEventListener("click", () => {
    checkLogin()
})
