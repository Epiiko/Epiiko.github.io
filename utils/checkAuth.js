function checkLoged() {
    const hoy = new Date().toISOString().split('T')[0];
    let usuarioLogeado = localStorage.getItem("usuario");
    let token = localStorage.getItem("token");
    let fechaLogin = localStorage.getItem("fecha");
    if (!usuarioLogeado || btoa(usuarioLogeado + hoy) != token) {
        window.location.href = "./index.html";
    }
    if(haPasadoMasDeUnDia(fechaLogin)){
        localStorage.removeItem("token")
        localStorage.removeItem("fechaLogin")
        localStorage.removeItem("usuarioLogeado")
    }
}
function haPasadoMasDeUnDia(fechaString) {
  // Separar año, mes y día del string
  const [anio, mes, dia] = fechaString.split('-').map(Number);

  // Crear la fecha a medianoche (mes-1 porque JS cuenta meses 0-11)
  const fechaGuardada = new Date(anio, mes - 1, dia);
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0); // normalizar a medianoche

  // Diferencia en milisegundos
  const diferencia = hoy - fechaGuardada;
  const unDia = 24 * 60 * 60 * 1000;

  return diferencia > unDia; // true si ha pasado más de un día
}
checkLoged()