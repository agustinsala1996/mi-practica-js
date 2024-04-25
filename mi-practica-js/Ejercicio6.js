function enumerarElementos(valor1, valor2) {
  let inicio = Math.min(valor1, valor2) + 1;
  let fin = Math.max(valor1, valor2);
  let elementos = [];

  for (let i = inicio; i < fin; i++) {
    elementos.push(i);
  }

  console.log(elementos.join(', '));
}

enumerarElementos(4, 10);
