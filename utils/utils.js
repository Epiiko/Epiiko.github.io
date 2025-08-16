import { CHALECOS } from "./equipament.js";

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

function mostrarCascos() {
  const container = document.getElementById('containerCasco');
  const descripcionContainer = container.querySelector('.descripcionContainer');

  let html = 'En este apartado se sorteará el casco a jugar<br><br>';
  html += '<div class="cascos-grid">';

  CHALECOS.forEach((casco) => {
    html += `
      <div class="casco-card calidad-${casco.calidad}">
        <div class="casco-image">
          <img src="${casco.image}" alt="${casco.name}" />
        </div>
        <div class="casco-info">
          <h3 class="casco-name">${casco.name}</h3>
          <span class="casco-calidad calidad-${casco.calidad}">${casco.calidad.toUpperCase()}</span>
        </div>
      </div>
    `;
  });

  html += '</div>';
  descripcionContainer.innerHTML = html;
}

toogleClassMostrar();
actualizarAno();

document.addEventListener('DOMContentLoaded', mostrarCascos());
