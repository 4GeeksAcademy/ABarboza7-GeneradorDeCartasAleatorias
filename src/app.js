import "bootstrap";
import "./style.css";

const numeros = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
const cartas = ["♥","♦","♣","♠"];

function mostrarCarta() {
  const valor = numeros[Math.floor(Math.random() * numeros.length)];
  const tipoDeCarta = cartas[Math.floor(Math.random() * cartas.length)];

  document.getElementById("contenedor").innerHTML =
    `<div class="carta">
       <div class="esquina arriba-izq">${valor}${tipoDeCarta}</div>
       <div class="centro">${valor}${tipoDeCarta}</div>
       <div class="esquina abajo-der">${valor}${tipoDeCarta}</div>
     </div>`;
}


window.mostrarCarta = mostrarCarta;

