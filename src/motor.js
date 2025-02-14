import{ partida
 }from "./modelo";
import { dameURLCarta,
          revisarPartida,
          reiniciar
 } from "./ui";

 document.addEventListener("DOMContentLoaded", (event) => {
  cargarPartida();
  })
  
  const cargarPartida = () => {
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
