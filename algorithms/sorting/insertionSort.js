const Arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

const insertionSortIncrease = n => {
  // Loop em todos os elementos da array para ordenar
  for (let i = 1; i < n.length; i += 1) {
    const chave = n[i];
    let j = i - 1;
    /*
      Se o número anterior na Array for maior, irá jogar esse número para frente. 
      Caso contrário, irá jogar a chave.
    */
    while (j >= 0 && n[j] > chave) {
      n[j + 1] = n[j];
      j -= 1;
    }
    n[j + 1] = chave;
  }

  return n;
};

const insertionSortDecrease = n => {
  for (let i = 1; i < n.length; i += 1) {
    const chave = n[i];
    let j = i - 1;
    // Invertendo a igualdade entre a chave e n[j], podemos ordenar em ordem decrescente
    while (j >= 0 && n[j] < chave) {
      n[j + 1] = n[j];
      j -= 1;
    }
    n[j + 1] = chave;
  }

  return n;
};

console.log(insertionSortIncrease(Arr));
console.log(insertionSortDecrease(Arr));
