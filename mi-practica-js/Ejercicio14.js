function filtrarPares(array) {
    return array.filter(numero => numero % 2 === 0);
  }
  

  let miArray = [1, 2, 3, 4, 5, 6];
  let numerosPares = filtrarPares(miArray);
  console.log("Los números pares son: " + numerosPares.join(', '));

  