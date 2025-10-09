function checkLoged() {
    const hoy = new Date().toISOString().split('T')[0];
    let usuarioLogeado = localStorage.getItem("usuario");
    let token = localStorage.getItem("token");
    if (!usuarioLogeado || btoa(usuarioLogeado + hoy) != token) {
        window.location.href = "./index.html";
    }
}
checkLoged()