import{ partida
 }from "./modelo";
import { dameURLCarta,
          revisarPartida,
          mostrarURLCarta,
          reiniciar,
          actualizarPuntosTotales,
          actualizarText
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

function obtenerPuntosCarta(carta){
    if (carta > 7){
      return 0.5;
    }
    return carta;
}
function sumarPuntos(puntos){
    console.log("Puntos actuales al sumar.")
    console.log(partida.puntosTotales)
    return (partida.puntosTotales + puntos);
}


function robarCarta(){
    const numeroRandom = numeroAleatorio();
    const carta = dameCarta(numeroRandom);
    const urlCarta = dameURLCarta(carta);
    const puntosCarta = obtenerPuntosCarta(carta);
    const puntosSumados = sumarPuntos(puntosCarta);
    actualizarPuntosTotales(puntosSumados);
    mostrarURLCarta(urlCarta);
    actualizarText();
    
    
}

function plantado(){
    revisarPartida()
}
