import { CASCOS, CHALECOS, MAPAS, AGENTES, ARMAS } from "./equipament.js";

// Random
export function randomCompleto() {
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

  let numRandomArmas = Math.floor(Math.random() * ARMAS.length);
  imgArma.src = ARMAS[numRandomArmas].image;
  nameArma.innerHTML = ARMAS[numRandomArmas].name

  let numRandomMapa = Math.floor(Math.random() * MAPAS.length);
  imgMapa.src = MAPAS[numRandomMapa].image;
  nameMapa.innerHTML = `${MAPAS[numRandomMapa].name} - ${MAPAS[numRandomMapa].dificultad}`

  let numRandomCasco = Math.floor(Math.random() * CASCOS.length);
  imgCasco.src = CASCOS[numRandomCasco].image;
  nameCasco.innerHTML = `${CASCOS[numRandomCasco].name} - ${CASCOS[numRandomCasco].calidad}`

  let numRandomChaleco = Math.floor(Math.random() * CHALECOS.length);
  imgChaleco.src = CHALECOS[numRandomChaleco].image;
  nameChaleco.innerHTML = `${CHALECOS[numRandomChaleco].name} - ${CHALECOS[numRandomChaleco].calidad}`

  let numRandomAgente = Math.floor(Math.random() * AGENTES.length);
  imgAgente.src = AGENTES[numRandomAgente].image;
  nameAgente.innerHTML = AGENTES[numRandomAgente].name

}

export function randomMapa() {
  const imgMapa = document.querySelector('#containerMapa .shuffle-image')
  const nameMapa = document.querySelector('#containerMapa .shuffle-name');

  let numRandom = Math.floor(Math.random() * MAPAS.length);

  imgMapa.src = MAPAS[numRandom].image;
  nameMapa.innerHTML = `${MAPAS[numRandom].name} - ${MAPAS[numRandom].dificultad}`
}

export function randomAgente() {
  const imgAgente = document.querySelector('#containerAgente .shuffle-image')
  const nameAgente = document.querySelector('#containerAgente .shuffle-name');
  let numRandom = Math.floor(Math.random() * AGENTES.length);

  imgAgente.src = AGENTES[numRandom].image;
  nameAgente.innerHTML = AGENTES[numRandom].name
}

export function randomArma() {
  const imgArma = document.querySelector('#containerArma .shuffle-image')
  const nameArma = document.querySelector('#containerArma .shuffle-name');
  let numRandom = Math.floor(Math.random() * ARMAS.length);

  imgArma.src = ARMAS[numRandom].image;
  nameArma.innerHTML = ARMAS[numRandom].name
}

export function randomCasco() {

  const imgCasco = document.querySelector('#containerCasco .shuffle-image')
  const nameCasco = document.querySelector('#containerCasco .shuffle-name');

  let numRandom = Math.floor(Math.random() * CASCOS.length);

  imgCasco.src = CASCOS[numRandom].image;
  nameCasco.innerHTML = `${CASCOS[numRandom].name} - ${CASCOS[numRandom].calidad}`
}
export function randomChaleco() {
  const imgChaleco = document.querySelector('#containerChaleco .shuffle-image')
  const nameChaleco = document.querySelector('#containerChaleco .shuffle-name');

  let numRandom = Math.floor(Math.random() * CHALECOS.length);

  imgChaleco.src = CHALECOS[numRandom].image;
  nameChaleco.innerHTML = `${CHALECOS[numRandom].name} - ${CHALECOS[numRandom].calidad}`
}
// INJECTAR
export function injectarCompleto() {
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

  let completo = JSON.parse(localStorage.getItem("completo"))

  imgArma.src = completo.arma.image;
  nameArma.innerHTML = completo.arma.name

  imgMapa.src = completo.mapa.image;
  nameMapa.innerHTML = `${completo.mapa.name} - ${completo.mapa.dificultad}`

  imgCasco.src = completo.casco.image;
  nameCasco.innerHTML = `${completo.casco.name} - ${completo.casco.calidad}`

  imgChaleco.src = completo.chaleco.image;
  nameChaleco.innerHTML = `${completo.chaleco.name} - ${completo.chaleco.calidad}`

  imgAgente.src = completo.agente.image;
  nameAgente.innerHTML = completo.agente.name

}

export function injectarMapa() {
  const imgMapa = document.querySelector('#containerMapa .shuffle-image')
  const nameMapa = document.querySelector('#containerMapa .shuffle-name');
  let mapa = JSON.parse(localStorage.getItem("mapa"))
  imgMapa.src = mapa.image;
  nameMapa.innerHTML = `${mapa.name} - ${mapa.dificultad}`

}

export function injectarAgente() {
  const imgAgente = document.querySelector('#containerAgente .shuffle-image')
  const nameAgente = document.querySelector('#containerAgente .shuffle-name');
  let agente = JSON.parse(localStorage.getItem("agente"))
  imgAgente.src = agente.image;
  nameAgente.innerHTML = agente.name

}

export function injectarArma() {
  const imgArma = document.querySelector('#containerArma .shuffle-image')
  const nameArma = document.querySelector('#containerArma .shuffle-name');
  let arma = JSON.parse(localStorage.getItem("arma"))
  imgArma.src = arma.image;
  nameArma.innerHTML = arma.name
}

export function injectarCasco() {
  const imgCasco = document.querySelector('#containerCasco .shuffle-image')
  const nameCasco = document.querySelector('#containerCasco .shuffle-name');
  let casco = JSON.parse(localStorage.getItem("casco"))
  imgCasco.src = casco.image;
  nameCasco.innerHTML = `${casco.name} - ${casco.calidad}`
}

export function injectarChaleco() {
  const imgChaleco = document.querySelector('#containerChaleco .shuffle-image')
  const nameChaleco = document.querySelector('#containerChaleco .shuffle-name');
  let chaleco = JSON.parse(localStorage.getItem("chaleco"))
  imgChaleco.src = chaleco.image;
  nameChaleco.innerHTML = `${chaleco.name} - ${chaleco.calidad}`
}
