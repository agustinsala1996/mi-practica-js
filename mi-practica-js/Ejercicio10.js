function sumarElementosPares(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        suma += array[i];
      }
    }
    return suma;
  }
  

  let miArray = [1, 2, 3, 4, 5, 6];
  let resultado = sumarElementosPares(miArray);
  console.log("La suma de los elementos pares del array es: " + resultado);

  