import{ modelo }from "./modelo.js";
import { dameURLCarta } from "./ui";
window.onload = function() {
function numeroAleatorio(){
    return (Math.floor(Math.random()*(10)))
}

function dameCarta(numeroAleatorio){
    if (numeroAleatorio > 7) {
      return numeroAleatorio + 2;
    }
    if (numeroAleatorio < 1){
      return 1;
    }
    return numeroAleatorio;
  }

function mostrarURLCarta(urlCarta){
    const elementoImagen = document.getElementById("img");

    if (elementoImagen !== null && elementoImagen !== undefined){
      elementoImagen.src = urlCarta;
    }
}
function obtenerPuntosCarta(carta){
    if (carta > 7){
      return 0.5;
    }
    return carta;
}
function sumarPuntos(puntos){
    console.log("Puntos actuales")
    console.log(partida.puntosTotales)
    return (partida.puntosTotales + puntos);
}

function actualizarPuntosTotales(nuevosPuntos){
    partida.puntosTotales = nuevosPuntos;

      
    const scoreB = document.getElementById("scoreboard");
    

    if (scoreB !== null && scoreB !== undefined){ 
      scoreB.textContent = partida.puntosTotales;
    }
}

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

function reiniciar(){
    partida.puntosTotales = 0;
    const scoreB = document.getElementById("scoreboard");
    if (scoreB !== null && scoreB !== undefined){ 
      scoreB.textContent = partida.puntosTotales;
    }
    const elementoImagen = document.getElementById("img");
    if (elementoImagen !== null && elementoImagen !== undefined){
      elementoImagen.src = "";
    }
}

function robarCarta(){
    const numeroRandom = numeroAleatorio();
    console.log(numeroRandom)
    const carta = dameCarta(numeroRandom);
    const urlCarta = dameURLCarta(carta);
    mostrarURLCarta(urlCarta);
    const puntosCarta = obtenerPuntosCarta(carta);
    const puntosSumados = sumarPuntos(puntosCarta);
    actualizarPuntosTotales(puntosSumados);
}

function plantado(){
    revisarPartida()
}
}