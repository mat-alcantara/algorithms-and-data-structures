const Arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

const mergeSort = arr => {
  if (arr.length > 1) {
    // Encontra o meio da Array
    const middle = Math.ceil(arr.length / 2);
    // Divide a primeira metade
    const leftArray = arr.slice(0, middle);
    // Divide a segunda metade
    const rightArray = arr.slice(middle);

    // Realiza o mesmo procedimento em cada metade até reduzir ao máximo
    mergeSort(leftArray);
    mergeSort(rightArray);

    // Variáveis para loop
    let i = 0;
    let j = 0;
    let k = 0;

    // Criar a array final
    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] < rightArray[j]) {
        arr[k] = leftArray[i];
        i += 1;
      } else {
        arr[k] = rightArray[j];
        j += 1;
      }

      k += 1;
    }

    // Checar elementos restantes na esquerda
    while (i < leftArray.length) {
      arr[k] = leftArray[i];
      i += 1;
      k += 1;
    }

    // Checar elementos restantes na direita
    while (j < rightArray.length) {
      arr[k] = rightArray[j];
      j += 1;
      k += 1;
    }
  }
};

mergeSort(Arr);
console.log(Arr);
