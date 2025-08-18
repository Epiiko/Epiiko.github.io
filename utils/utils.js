import { CASCOS, MAPAS as mapasHoraActual, CHALECOS, AGENTES, ARMAS, CALIDADES } from "./equipament.js";
import * as  LS from "./recuperarLocalStorage.js"


// Configuración de velocidades
const velocidades = {
  arma: 100,
  mapa: 100,
  casco: 100,
  chaleco: 100,
  agente: 100
};

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
      const clickedOption = ev.currentTarget;
      if (clickedOption.classList.contains("disabled")) {
        document.querySelector(".active").classList.replace("active", "disabled");
        clickedOption.classList.replace("disabled", "active");
        const optionText = clickedOption.querySelector(".option-text").textContent;
        cambiarTitulo(optionText)
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
  const imgMapa = document.querySelector('#containerMapa .shuffle-image')
  const nameMapa = document.querySelector('#containerMapa .shuffle-name');

  let intervalo;
  let mapaSelected;
  let mapasHoraActual = filtrarHorarioMapa();

  intervalo = setInterval(() => {
    imgMapa.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * mapasHoraActual.length);
      imgMapa.src = mapasHoraActual[randomIndex].image;
      nameMapa.textContent = `${mapasHoraActual[randomIndex].name} - ${mapasHoraActual[randomIndex].dificultad}`;
      imgMapa.style.transform = "rotateX(0deg)";
    }, 100);
  }, velocidades.mapa);

  // paramos a los 8 segundos
  setTimeout(() => {
    clearInterval(intervalo);
    const finalIndex = Math.floor(Math.random() * mapasHoraActual.length);
    imgMapa.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      imgMapa.src = mapasHoraActual[finalIndex].image;
      nameMapa.textContent = `${mapasHoraActual[finalIndex].name} - ${mapasHoraActual[finalIndex].dificultad}`;
      imgMapa.style.transform = "rotateX(0deg)";
      mapaSelected = {
        name: mapasHoraActual[finalIndex].name,
        dificultad: mapasHoraActual[finalIndex].dificultad,
        image: mapasHoraActual[finalIndex].image
      }
      almacenarItem("mapa", mapaSelected);
    }, 100);
  }, 6000);

}
function chalecoAleatorio() {
  const imgChaleco = document.querySelector('#containerChaleco .shuffle-image')
  const nameChaleco = document.querySelector('#containerChaleco .shuffle-name');

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
  }, velocidades.chaleco);

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
  const imgCasco = document.querySelector('#containerCasco .shuffle-image')
  const nameCasco = document.querySelector('#containerCasco .shuffle-name');

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
  }, velocidades.casco);

  // paramos a los 8 segundos
  setTimeout(() => {
    clearInterval(intervalo);
    const finalIndex = Math.floor(Math.random() * CASCOS.length);
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
  const imgAgente = document.querySelector('#containerAgente .shuffle-image')
  const nameAgente = document.querySelector('#containerAgente .shuffle-name');

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
  }, velocidades.agente);

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
  const imgArma = document.querySelector('#containerArma .shuffle-image')
  const nameArma = document.querySelector('#containerArma .shuffle-name');

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
  }, velocidades.arma);

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
  const imgArma = document.querySelector('.itemArma .complete-image')
  const nameArma = document.querySelector('.itemArma .complete-name');
  const imgMapa = document.querySelector('.itemMapa .complete-image')
  const nameMapa = document.querySelector('.itemMapa .complete-name');
  const imgCasco = document.querySelector('.itemCasco .complete-image')
  const nameCasco = document.querySelector('.itemCasco .complete-name');
  const imgChaleco = document.querySelector('.itemChaleco .complete-image')
  const nameChaleco = document.querySelector('.itemChaleco .complete-name');
  const imgAgente = document.querySelector('.itemAgente .complete-image')
  const nameAgente = document.querySelector('.itemAgente .complete-name');

  let completoSelected;
  const intervalos = []; // Array para almacenar todos los intervalos

  // INTERVALO ARMAS
  const intervaloArma = setInterval(() => {
    imgArma.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      const randomIndexArma = Math.floor(Math.random() * ARMAS.length);
      imgArma.src = ARMAS[randomIndexArma].image;
      nameArma.textContent = ARMAS[randomIndexArma].name;
      imgArma.style.transform = "rotateX(0deg)";
    }, 100);
  }, velocidades.arma);
  intervalos.push(intervaloArma);

  // INTERVALO MAPAS
  const intervaloMapa = setInterval(() => {
    imgMapa.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      const randomIndexMapa = Math.floor(Math.random() * mapasHoraActual.length);
      imgMapa.src = mapasHoraActual[randomIndexMapa].image;
      nameMapa.textContent = `${mapasHoraActual[randomIndexMapa].name} - ${mapasHoraActual[randomIndexMapa].dificultad}`;
      imgMapa.style.transform = "rotateX(0deg)";
    }, 100);
  }, velocidades.mapa);
  intervalos.push(intervaloMapa);

  // INTERVALO CASCOS
  const intervaloCasco = setInterval(() => {
    imgCasco.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      const randomIndexCasco = Math.floor(Math.random() * CASCOS.length);
      imgCasco.src = CASCOS[randomIndexCasco].image;
      nameCasco.textContent = `${CASCOS[randomIndexCasco].name} - ${CASCOS[randomIndexCasco].calidad}`;
      imgCasco.style.transform = "rotateX(0deg)";
    }, 100);
  }, velocidades.casco);
  intervalos.push(intervaloCasco);

  // INTERVALO CHALECOS
  const intervaloChaleco = setInterval(() => {
    imgChaleco.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      const randomIndexChaleco = Math.floor(Math.random() * CHALECOS.length);
      imgChaleco.src = CHALECOS[randomIndexChaleco].image;
      nameChaleco.textContent = `${CHALECOS[randomIndexChaleco].name} - ${CHALECOS[randomIndexChaleco].calidad}`;
      imgChaleco.style.transform = "rotateX(0deg)";
    }, 100);
  }, velocidades.chaleco);
  intervalos.push(intervaloChaleco);

  // INTERVALO AGENTES
  const intervaloAgente = setInterval(() => {
    imgAgente.style.transform = "rotateX(90deg)";
    setTimeout(() => {
      const randomIndexAgente = Math.floor(Math.random() * AGENTES.length);
      imgAgente.src = AGENTES[randomIndexAgente].image;
      nameAgente.textContent = AGENTES[randomIndexAgente].name;
      imgAgente.style.transform = "rotateX(0deg)";
    }, 100);
  }, velocidades.agente);
  intervalos.push(intervaloAgente);

  // Paramos todos los intervalos a los 6 segundos
  setTimeout(() => {
    // Limpiar todos los intervalos
    intervalos.forEach(intervalo => clearInterval(intervalo));

    // Generar selecciones finales
    const finalIndexArma = Math.floor(Math.random() * ARMAS.length);
    const finalIndexCasco = Math.floor(Math.random() * CASCOS.length);
    const finalIndexChaleco = Math.floor(Math.random() * CHALECOS.length);
    const finalIndexAgente = Math.floor(Math.random() * AGENTES.length);

    // Animación final para todos los elementos
    imgArma.style.transform = "rotateX(90deg)";
    imgMapa.style.transform = "rotateX(90deg)";
    imgCasco.style.transform = "rotateX(90deg)";
    imgChaleco.style.transform = "rotateX(90deg)";
    imgAgente.style.transform = "rotateX(90deg)";

    setTimeout(() => {
      // RESULTADOS FINALES

      // ARMA FINAL
      imgArma.src = ARMAS[finalIndexArma].image;
      nameArma.textContent = ARMAS[finalIndexArma].name;
      imgArma.style.transform = "rotateX(0deg)";



      // CASCO FINAL
      imgCasco.src = CASCOS[finalIndexCasco].image;
      nameCasco.textContent = `${CASCOS[finalIndexCasco].name} - ${CASCOS[finalIndexCasco].calidad}`;
      imgCasco.style.transform = "rotateX(0deg)";

      // CHALECO FINAL
      imgChaleco.src = CHALECOS[finalIndexChaleco].image;
      nameChaleco.textContent = `${CHALECOS[finalIndexChaleco].name} - ${CHALECOS[finalIndexChaleco].calidad}`;
      imgChaleco.style.transform = "rotateX(0deg)";

      // AGENTE FINAL
      imgAgente.src = AGENTES[finalIndexAgente].image;
      nameAgente.textContent = AGENTES[finalIndexAgente].name;
      imgAgente.style.transform = "rotateX(0deg)";

      // MAPA FINAL
      let mapasCopy = [...filtrarHorarioMapa()];

      let mapaFinal;
      //Si sale dorado en casco o chaleco quitamos los easy del array
      if (CASCOS[finalIndexCasco].calidad == CALIDADES[4] || CHALECOS[finalIndexChaleco].calidad == [4]) {
        mapaFinal = mapasCopy.filter(m => m.dificultad != 'Easy')
      } else {
        mapaFinal = [...mapasCopy]
      }

      const finalIndexMapa = Math.floor(Math.random() * mapaFinal.length);

      imgMapa.src = mapaFinal[finalIndexMapa].image;
      nameMapa.textContent = `${mapaFinal[finalIndexMapa].name} - ${mapaFinal[finalIndexMapa].dificultad}`;
      imgMapa.style.transform = "rotateX(0deg)";
      // Guardar selección completa
      completoSelected = {
        arma: {
          name: ARMAS[finalIndexArma].name,
          image: ARMAS[finalIndexArma].image
        },
        mapa: {
          name: mapaFinal[finalIndexMapa].name,
          image: mapaFinal[finalIndexMapa].image,
          dificultad: mapaFinal[finalIndexMapa].dificultad
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

function filtrarHorarioMapa() {
  const horaActual = new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }).split(' ')[1].split(':')[0];
  const mapaFiltrado = mapasHoraActual.filter(mapa => {
    return mapa.hora ? mapa.hora.includes(horaActual) : true;
  });
  return mapaFiltrado;
}

//shuffle botones
//completo

document.querySelector('.shuffleButtonCompleto').addEventListener('click', () => {
  completoAleatorio();
})
//mapa
document.querySelector('#containerMapa .shuffle-btn').addEventListener('click', () => {
  mapaAleatorio();
})
//chaleco
document.querySelector('#containerChaleco .shuffle-btn').addEventListener('click', () => {
  chalecoAleatorio();
})
//casco
document.querySelector('#containerCasco .shuffle-btn').addEventListener('click', () => {
  cascoAleatorio();
})
//agente
document.querySelector('#containerAgente .shuffle-btn').addEventListener('click', () => {
  agenteAleatorio();
})
//arma
document.querySelector('#containerArma .shuffle-btn').addEventListener('click', () => {
  armaAleatorio();
})

//funciones directas
toogleClassMostrar();
actualizarAno();
recuperarPersistenciaInfo()