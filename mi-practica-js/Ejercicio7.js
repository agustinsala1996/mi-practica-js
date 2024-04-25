function mostrarMultiplosDeTres(num1, num2) {
    let inicio = Math.min(num1, num2);
    let fin = Math.max(num1, num2);
  
    console.log("Múltiplos de 3 entre " + num1 + " y " + num2 + ":");
    for (let i = inicio; i <= fin; i++) {
      if (i % 3 === 0) {
        console.log(i);
      }
    }
  }
  

  mostrarMultiplosDeTres(10, 30);