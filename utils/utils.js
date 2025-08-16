import { CASCOS, MAPAS, CHALECOS } from "./equipament.js";
import * as  LS from "./recuperarLocalStorage.js"

function recuperarPersistenciaInfo() {
  localStorage.getItem("completo") ? LS.randomCompleto() : LS.injectarCompleto()
  !localStorage.getItem("mapa") ? LS.randomMapa() : LS.injectarMapa()
  localStorage.getItem("agente") ? LS.randomAgente() : LS.injectarAgente()
  localStorage.getItem("arma") ? LS.randomArma() : LS.injectarArma()
  !localStorage.getItem("casco") ? LS.randomCasco() : LS.injectarCasco()
  !localStorage.getItem("chaleco") ? LS.randomChaleco() : LS.injectarChaleco()
}

/**
 * Funcion para cambiar cambiar de vista cuando se seleccione una pestaña en la barra de navegación
 */

function toogleClassMostrar() {
  const option_class = document.querySelectorAll(".option")

  option_class.forEach((span, index) => {
    span.addEventListener("click", (ev) => {
      if (ev.target.classList.contains("disabled")) {
        document.querySelector(".active").classList.replace("active", "disabled");
        ev.target.classList.replace("disabled", "active");
        cambiarTitulo(ev.target.innerHTML)
        document.querySelector(".showed").classList.replace("showed", "hidden")
        document.querySelectorAll(".container")[index].classList.replace("hidden", "showed");
      }
    })
  })
}

function actualizarAno() {
  document.querySelector('.copyright').innerHTML =
    `&copy; ${new Date().getFullYear()} Delta Force Team. Todos los derechos reservados.`;
}

function cambiarTitulo(titulo) {
  const elemento = document.querySelector(".caseType")
  // Añadimos el texto que se seleccione al titulo
  if (titulo != "Completo" && titulo != "Inicio" && titulo != "About us") {
    elemento.innerHTML = titulo + " randomizer"
  } else if (titulo != "Inicio" && titulo != "About us") {
    elemento.innerHTML = "Randomizer " + titulo.toLowerCase()
  } else {
    elemento.innerHTML = titulo
  }
}
function mapaAleatorio() {
  const imgMapa = document.querySelector('#containerMapa .shuffleElementSingle img')
  const nameMapa = document.querySelector('#containerMapa .shuffleContainerSingle .shuffleElementName');

  let intervalo;
  let mapaSelected;

  intervalo = setInterval(() => {
    imgMapa.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * MAPAS.length);
      imgMapa.src = MAPAS[randomIndex].image;
      nameMapa.textContent = `${MAPAS[randomIndex].name} - ${MAPAS[randomIndex].dificultad}`;
      imgMapa.style.transform = "rotateX(0deg)";
    }, 100);
  }, 150);

  // paramos a los 8 segundos
  setTimeout(() => {
    clearInterval(intervalo);
    const finalIndex = Math.floor(Math.random() * MAPAS.length);
    imgMapa.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      imgMapa.src = MAPAS[finalIndex].image;
      nameMapa.textContent = `${MAPAS[finalIndex].name} - ${MAPAS[finalIndex].dificultad}`;
      imgMapa.style.transform = "rotateX(0deg)";
      mapaSelected = {
        name: MAPAS[finalIndex].name,
        dificultad: MAPAS[finalIndex].dificultad,
        image: MAPAS[finalIndex].image
      }
      almacenarItem("mapa", mapaSelected);
    }, 100);
  }, 6000);

}
function chalecoAleatorio() {
  const imgChaleco = document.querySelector('#containerChaleco .shuffleElementSingle img')
  const nameChaleco = document.querySelector('#containerChaleco .shuffleContainerSingle .shuffleElementName');

  let intervalo;
  let chalecoSelected;

  intervalo = setInterval(() => {
    imgChaleco.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * CHALECOS.length);
      imgChaleco.src = CHALECOS[randomIndex].image;
      nameChaleco.textContent = `${CHALECOS[randomIndex].name} - ${CHALECOS[randomIndex].calidad}`;
      imgChaleco.style.transform = "rotateX(0deg)";
    }, 100);
  }, 150);

  // paramos a los 8 segundos
  setTimeout(() => {
    clearInterval(intervalo);
    const finalIndex = Math.floor(Math.random() * CHALECOS.length);
    imgChaleco.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      imgChaleco.src = CHALECOS[finalIndex].image;
      nameChaleco.textContent = `${CHALECOS[finalIndex].name} - ${CHALECOS[finalIndex].calidad}`;
      imgChaleco.style.transform = "rotateX(0deg)";
      chalecoSelected = {
        name: CHALECOS[finalIndex].name,
        calidad: CHALECOS[finalIndex].calidad,
        image: CHALECOS[finalIndex].image
      }
      almacenarItem("chaleco", chalecoSelected);
    }, 100);
  }, 6000);

}
function cascoAleatorio() {
  const imgCasco = document.querySelector('#containerCasco .shuffleElementSingle img')
  const nameCasco = document.querySelector('#containerCasco .shuffleContainerSingle .shuffleElementName');

  let intervalo;
  let cascoSelected;
  intervalo = setInterval(() => {
    imgCasco.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * CASCOS.length);
      imgCasco.src = CASCOS[randomIndex].image;
      nameCasco.textContent = `${CASCOS[randomIndex].name} - ${CASCOS[randomIndex].calidad}`;
      imgCasco.style.transform = "rotateX(0deg)";
    }, 100);
  }, 150);

  // paramos a los 8 segundos
  setTimeout(() => {
    clearInterval(intervalo);
    const finalIndex = Math.floor(Math.random() * CHALECOS.length);
    imgCasco.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      imgCasco.src = CASCOS[finalIndex].image;
      nameCasco.textContent = `${CASCOS[finalIndex].name} - ${CASCOS[finalIndex].calidad}`;
      imgCasco.style.transform = "rotateX(0deg)";
      cascoSelected = {
        name: CASCOS[finalIndex].name,
        calidad: CASCOS[finalIndex].calidad,
        image: CASCOS[finalIndex].image
      }
      almacenarItem("casco", cascoSelected);
    }, 100);
  }, 6000);

}

function almacenarItem(tipoObjeto, objeto) {
  localStorage.setItem(tipoObjeto, JSON.stringify(objeto))
}

//shuffle botones
//mapa
document.querySelector('#containerMapa .shuffleButtonSingle').addEventListener('click', () => {
  mapaAleatorio();
})
//chaleco
document.querySelector('#containerChaleco .shuffleButtonSingle').addEventListener('click', () => {
  chalecoAleatorio();
})
//casco
document.querySelector('#containerCasco .shuffleButtonSingle').addEventListener('click', () => {
  cascoAleatorio();
})

//funciones directas
toogleClassMostrar();
actualizarAno();
recuperarPersistenciaInfo()

