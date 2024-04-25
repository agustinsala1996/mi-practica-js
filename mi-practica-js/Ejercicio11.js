function contarLetras(palabra) {
    let frecuencia = {};
    for (let i = 0; i < palabra.length; i++) {
      let letra = palabra[i];
      if (!frecuencia[letra]) {
        frecuencia[letra] = 1;
      } else {
        frecuencia[letra]++;
      }
    }
    return frecuencia;
  }

  let resultado = contarLetras('COCHE');
  console.log(resultado);
