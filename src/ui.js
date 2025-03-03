import{ partida
}from "./modelo";

import {
  numeroAleatorio,
  dameCarta,
  obtenerPuntosCarta,
  sumarPuntos
} from "./motor";

function dameURLCarta(carta){
    switch(carta){
      case 1:
          return ("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg") 
      case 2:
          return ("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"); 
      case 3:
          return ("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"); 
      case 4:
          return ("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"); 
      case 5:
          return ("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"); 
      case 6:
          return ("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"); 
      case 7:
          return ("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"); 
      case 9:
          return ("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"); 
      case 10:
          return ("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"); 
      case 11:
          return ("https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg");
      default:
          console.log("Numero irregular.");
          console.log(carta);
  }
  }

document.addEventListener("DOMContentLoaded", (event) => {
  cargarPartida();
})

function revisarPartida(){
    if(partida.puntosTotales === 7.5){
      alert("Has ganado la partida.")
     }
     if(partida.puntosTotales > 7.5){
      alert("Has perdido la partida")
     }
     if (partida.puntosTotales < 4){
       alert("Has sido muy conservador");
     } 
     if ((partida.puntosTotales >= 4) && (partida.puntosTotales <= 5)) {
       alert("Te ha entrado el canguelo eh?");
     }
     if ((partida.puntosTotales >5) && (partida.puntosTotales < 7.5)){
       alert("Casi casi...")   
     }
}

function mostrarURLCarta(urlCarta){
  const elementoImagen = document.getElementById("img");

  if (elementoImagen !== null && elementoImagen !== undefined){
    elementoImagen.src = urlCarta;
  }
}

function actualizarPuntosTotales(nuevosPuntos){
  partida.puntosTotales = nuevosPuntos
  console.log("Puntos actuales al añadir.")
  console.log(partida.puntosTotales)
}

function actualizarText(){
  const scoreB = document.getElementById("scoreboard");
    

    if (scoreB !== null && scoreB !== undefined){   
      scoreB.textContent = partida.puntosTotales;
    }
}

function reiniciar(){
    actualizarPuntosTotales(0);
    actualizarText();
    mostrarURLCarta("");
}

export function robarCarta(){
      const numeroRandom = numeroAleatorio();
      const carta = dameCarta(numeroRandom);
      const urlCarta = dameURLCarta(carta);
      const puntosCarta = obtenerPuntosCarta(carta);
      const puntosSumados = sumarPuntos(puntosCarta);
      actualizarPuntosTotales(puntosSumados);
      mostrarURLCarta(urlCarta);
      actualizarText();
}
  


export const cargarPartida = () => {
  const botonRobarCarta = document.getElementById("robarCarta");
  if ((botonRobarCarta !== null && botonRobarCarta !== undefined)){
    botonRobarCarta.addEventListener("click", robarCarta)
    }
  const botonPlantarJuego = document.getElementById("plantarJuego");
  if ((botonPlantarJuego !== null && botonPlantarJuego !== undefined)){
    botonPlantarJuego.addEventListener("click", plantado)
  }
  const botonReiniciar = document.getElementById("reiniciar");
  if ((botonReiniciar !== null && botonReiniciar !== undefined)){
    botonReiniciar.addEventListener("click", reiniciar)
  }
  }  
  
export function plantado(){
    revisarPartida()
}