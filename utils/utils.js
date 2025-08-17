import { CASCOS, MAPAS, CHALECOS, AGENTES, ARMAS } from "./equipament.js";
import * as  LS from "./recuperarLocalStorage.js"

function recuperarPersistenciaInfo() {
  localStorage.getItem("completo") ? LS.injectarCompleto() : LS.randomCompleto()
  localStorage.getItem("mapa") ? LS.injectarMapa() : LS.randomMapa()
  localStorage.getItem("agente") ? LS.injectarAgente() : LS.randomAgente()
  localStorage.getItem("arma") ? LS.injectarArma() : LS.randomArma()
  localStorage.getItem("casco") ? LS.injectarCasco() : LS.randomCasco()
  localStorage.getItem("chaleco") ? LS.injectarChaleco() : LS.randomChaleco()
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
function agenteAleatorio() {
  const imgAgente = document.querySelector('#containerAgente .shuffleElementSingle img')
  const nameAgente = document.querySelector('#containerAgente .shuffleContainerSingle .shuffleElementName');

  let intervalo;
  let agenteSelected;
  intervalo = setInterval(() => {
    imgAgente.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * AGENTES.length);
      imgAgente.src = AGENTES[randomIndex].image;
      nameAgente.textContent = AGENTES[randomIndex].name;
      imgAgente.style.transform = "rotateX(0deg)";
    }, 100);
  }, 150);

  // paramos a los 8 segundos
  setTimeout(() => {
    clearInterval(intervalo);
    const finalIndex = Math.floor(Math.random() * AGENTES.length);
    imgAgente.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      imgAgente.src = AGENTES[finalIndex].image;
      nameAgente.textContent = AGENTES[finalIndex].name;
      imgAgente.style.transform = "rotateX(0deg)";
      agenteSelected = {
        name: AGENTES[finalIndex].name,
        image: AGENTES[finalIndex].image
      }
      almacenarItem("agente", agenteSelected);
    }, 100);
  }, 6000);

}
function armaAleatorio() {
  const imgArma = document.querySelector('#containerArma .shuffleElementSingle img')
  const nameArma = document.querySelector('#containerArma .shuffleContainerSingle .shuffleElementName');

  let intervalo;
  let armaSelected;
  intervalo = setInterval(() => {
    imgArma.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * ARMAS.length);
      imgArma.src = ARMAS[randomIndex].image;
      nameArma.textContent = ARMAS[randomIndex].name;
      imgArma.style.transform = "rotateX(0deg)";
    }, 100);
  }, 150);

  // paramos a los 8 segundos
  setTimeout(() => {
    clearInterval(intervalo);
    const finalIndex = Math.floor(Math.random() * ARMAS.length);
    imgArma.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      imgArma.src = ARMAS[finalIndex].image;
      nameArma.textContent = ARMAS[finalIndex].name;
      imgArma.style.transform = "rotateX(0deg)";
      armaSelected = {
        name: ARMAS[finalIndex].name,
        image: ARMAS[finalIndex].image
      }
      almacenarItem("arma", armaSelected);
    }, 100);
  }, 6000);

}
function completoAleatorio() {
  const imgArma = document.querySelector('.itemArma img')
  const nameArma = document.querySelector('.itemArma .shuffleElementName');
  const imgMapa = document.querySelector('.itemMapa img')
  const nameMapa = document.querySelector('.itemMapa .shuffleElementName');
  const imgCasco = document.querySelector('.itemCasco img')
  const nameCasco = document.querySelector('.itemCasco .shuffleElementName');
  const imgChaleco = document.querySelector('.itemChaleco img')
  const nameChaleco = document.querySelector('.itemChaleco .shuffleElementName');
  const imgAgente = document.querySelector('.itemAgente img')
  const nameAgente = document.querySelector('.itemAgente .shuffleElementName');

  let intervalo;
  let completoSelected;
  intervalo = setInterval(() => {
    imgArma.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      const randomIndexArma = Math.floor(Math.random() * ARMAS.length);
      const randomIndexMapa = Math.floor(Math.random() * MAPAS.length);
      const randomIndexCasco = Math.floor(Math.random() * CASCOS.length);
      const randomIndexChaleco = Math.floor(Math.random() * CHALECOS.length);
      const randomIndexAgente = Math.floor(Math.random() * AGENTES.length);
      imgArma.src = ARMAS[randomIndexArma].image;
      nameArma.textContent = ARMAS[randomIndexArma].name;
      //fin arma
      imgMapa.src = MAPAS[randomIndexMapa].image;
      nameMapa.textContent = `${MAPAS[randomIndexMapa].name} - ${MAPAS[randomIndexMapa].dificultad}`;
      //fin mapa
      imgCasco.src = CASCOS[randomIndexCasco].image;
      nameCasco.textContent = `${CASCOS[randomIndexCasco].name} - ${CASCOS[randomIndexCasco].calidad}`;
      //fin casco
      imgChaleco.src = CHALECOS[randomIndexChaleco].image;
      nameChaleco.textContent = `${CHALECOS[randomIndexChaleco].name} - ${CHALECOS[randomIndexChaleco].calidad}`;
      //fin chaleco
      imgAgente.src = AGENTES[randomIndexAgente].image;
      nameAgente.textContent = AGENTES[randomIndexAgente].name;
      //fin agentes
      imgArma.style.transform = "rotateX(0deg)";
      imgMapa.style.transform = "rotateX(0deg)";
      imgCasco.style.transform = "rotateX(0deg)";
      imgChaleco.style.transform = "rotateX(0deg)";
      imgAgente.style.transform = "rotateX(0deg)";
    }, 100);
  }, 150);

  // paramos a los 8 segundos
  setTimeout(() => {
    clearInterval(intervalo);
    const finalIndexArma = Math.floor(Math.random() * ARMAS.length);
    const finalIndexMapa = Math.floor(Math.random() * MAPAS.length);
    const finalIndexCasco = Math.floor(Math.random() * CASCOS.length);
    const finalIndexChaleco = Math.floor(Math.random() * CHALECOS.length);
    const finalIndexAgente = Math.floor(Math.random() * AGENTES.length);
    imgArma.style.transform = "rotateX(90deg)";
    imgMapa.style.transform = "rotateX(90deg)";
    imgCasco.style.transform = "rotateX(90deg)";
    imgChaleco.style.transform = "rotateX(90deg)";
    imgAgente.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      imgArma.src = ARMAS[finalIndexArma].image;
      nameArma.textContent = ARMAS[finalIndexArma].name;
      imgArma.style.transform = "rotateX(0deg)";
      //fin arma
      imgMapa.src = MAPAS[finalIndexMapa].image;
      nameMapa.textContent =`${MAPAS[finalIndexMapa].name} - ${MAPAS[finalIndexMapa].dificultad}`;
      imgMapa.style.transform = "rotateX(0deg)";
      //fin mapa
      imgCasco.src = CASCOS[finalIndexCasco].image;
      nameCasco.textContent =  `${CASCOS[finalIndexCasco].name} - ${CASCOS[finalIndexCasco].calidad}`;
      imgCasco.style.transform = "rotateX(0deg)";
      //fin casco
      imgChaleco.src = CHALECOS[finalIndexChaleco].image;
      nameChaleco.textContent =  `${CHALECOS[finalIndexChaleco].name} - ${CHALECOS[finalIndexChaleco].calidad}`;
      imgChaleco.style.transform = "rotateX(0deg)";
      //fin chaleco
      imgAgente.src = AGENTES[finalIndexAgente].image;
      nameAgente.textContent =  AGENTES[finalIndexAgente].name;
      imgAgente.style.transform = "rotateX(0deg)";
      //fin agente
      completoSelected = {
        arma: {
          name: ARMAS[finalIndexArma].name,
          image: ARMAS[finalIndexArma].image
        },
        mapa: {
          name: MAPAS[finalIndexMapa].name,
          image: MAPAS[finalIndexMapa].image,
          dificultad: MAPAS[finalIndexMapa].dificultad
        },
        casco: {
          name: CASCOS[finalIndexCasco].name,
          image: CASCOS[finalIndexCasco].image,
          calidad: CASCOS[finalIndexCasco].calidad
        },
        chaleco: {
          name: CHALECOS[finalIndexChaleco].name,
          image: CHALECOS[finalIndexChaleco].image,
          calidad: CHALECOS[finalIndexChaleco].calidad
        },
        agente: {
          name: AGENTES[finalIndexAgente].name,
          image: AGENTES[finalIndexAgente].image,
        }

      }
      almacenarItem("completo", completoSelected);
    }, 100);
  }, 6000);

}

function almacenarItem(tipoObjeto, objeto) {
  localStorage.setItem(tipoObjeto, JSON.stringify(objeto))
}

//shuffle botones
//completo

document.querySelector('.shuffleButtonCompleto').addEventListener('click', () => {
  completoAleatorio();
})
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
//agente
document.querySelector('#containerAgente .shuffleButtonSingle').addEventListener('click', () => {
  agenteAleatorio();
})
//arma
document.querySelector('#containerArma .shuffleButtonSingle').addEventListener('click', () => {
  armaAleatorio();
})

//funciones directas
toogleClassMostrar();
actualizarAno();
recuperarPersistenciaInfo()

