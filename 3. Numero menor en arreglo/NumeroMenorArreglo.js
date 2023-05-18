// NÚMERO MENOR EN UN ARREGLO

// DEFINICIÓN DE VARIABLES
let enunciado = [3, -56, 0, 89, 12];

// FUNCIÓN DE BÚSQUEDA DE NÚMERO MENOR EN UN ARREGLO
function numeroMenor(arreglo) {
  let respuesta = arreglo[0]
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] < respuesta) {
      respuesta = arreglo[i];
    }
  }
  console.log(respuesta);
}

// BÚSQUEDA DE NÚMERO MENOR EN EL ARREGLO DEL ENUNCIADO
numeroMenor(enunciado);
