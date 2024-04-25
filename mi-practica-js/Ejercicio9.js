function sumaDeElementos(array) {
    return array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  }
  

  let miArray = [1, 2, 3, 4, 5];
  let resultado = sumaDeElementos(miArray);
  console.log("La suma de los elementos del array es: " + resultado);

  