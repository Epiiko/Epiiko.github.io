import { CASCOS, CHALECOS, MAPAS, AGENTES } from "./equipament.js";

// Random
export function randomCompleto() {

}

export function randomMapa() {
  const imgMapa = document.querySelector('#containerMapa .shuffleElementSingle img')
  const nameMapa = document.querySelector('#containerMapa .shuffleContainerSingle .shuffleElementName');

  let numRandom = Math.floor(Math.random() * MAPAS.length);

  imgMapa.src = MAPAS[numRandom].image;
  nameMapa.innerHTML = `${MAPAS[numRandom].name} - ${MAPAS[numRandom].dificultad}`
}

export function randomAgente() {
  const imgAgente = document.querySelector('#containerAgente .shuffleElementSingle img')
  const nameAgente = document.querySelector('#containerAgente .shuffleContainerSingle .shuffleElementName');
  let numRandom = Math.floor(Math.random() * AGENTES.length);

  imgAgente.src = AGENTES[numRandom].image;
  nameAgente.innerHTML = AGENTES[numRandom].name
}

export function randomArma() {

}

export function randomCasco() {

  const imgCasco = document.querySelector('#containerCasco .shuffleElementSingle img')
  const nameCasco = document.querySelector('#containerCasco .shuffleContainerSingle .shuffleElementName');

  let numRandom = Math.floor(Math.random() * CASCOS.length);

  imgCasco.src = CASCOS[numRandom].image;
  nameCasco.innerHTML = `${CASCOS[numRandom].name} - ${CASCOS[numRandom].calidad}`
}
export function randomChaleco() {
  const imgChaleco = document.querySelector('#containerCasco .shuffleElementSingle img')
  const nameChaleco = document.querySelector('#containerCasco .shuffleContainerSingle .shuffleElementName');

  let numRandom = Math.floor(Math.random() * CHALECOS.length);

  imgChaleco.src = CHALECOS[numRandom].image;
  nameChaleco.innerHTML = `${CHALECOS[numRandom].name} - ${CHALECOS[numRandom].calidad}`
}
// INJECTAR
export function injectarCompleto() {

}

export function injectarMapa() {
  const imgMapa = document.querySelector('#containerMapa .shuffleElementSingle img')
  const nameMapa = document.querySelector('#containerMapa .shuffleContainerSingle .shuffleElementName');
  let mapa = JSON.parse(localStorage.getItem("mapa"))
  imgMapa.src = mapa.image;
  nameMapa.innerHTML = `${mapa.name} - ${mapa.dificultad}`

}

export function injectarAgente() {
  const imgAgente = document.querySelector('#containerAgente .shuffleElementSingle img')
  const nameAgente = document.querySelector('#containerAgente .shuffleContainerSingle .shuffleElementName');
  let agente = JSON.parse(localStorage.getItem("agente"))
  imgAgente.src = agente.image;
  nameAgente.innerHTML = agente.name

}

export function injectarArma() {

}

export function injectarCasco() {
  const imgCasco = document.querySelector('#containerCasco .shuffleElementSingle img')
  const nameCasco = document.querySelector('#containerCasco .shuffleContainerSingle .shuffleElementName');
  let casco = JSON.parse(localStorage.getItem("casco"))
  imgCasco.src = casco.image;
  nameCasco.innerHTML = `${casco.name} - ${casco.calidad}`
}

export function injectarChaleco() {
  const imgChaleco = document.querySelector('#containerChaleco .shuffleElementSingle img')
  const nameChaleco = document.querySelector('#containerChaleco .shuffleContainerSingle .shuffleElementName');
  let chaleco = JSON.parse(localStorage.getItem("chaleco"))
  imgChaleco.src = chaleco.image;
  nameChaleco.innerHTML = `${chaleco.name} - ${chaleco.calidad}`
}
