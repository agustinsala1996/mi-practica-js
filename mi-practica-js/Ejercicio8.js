function mostrarMultiplosMenoresACien() {
    console.log("Múltiplos de 2 y 3 menores a 100:");
    for (let i = 1; i < 100; i++) {
      if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
      }
    }
  }
  
mostrarMultiplosMenoresACien();

  