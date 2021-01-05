const selectionSort = Arr => {
  let menor = 0;
  for (let i = 0; i < Arr.length; i += 1) {
    menor = i;
    for (let j = i + 1; j < Arr.length; j += 1) {
      if (Arr[j] < Arr[menor]) {
        menor = j;
      }
    }

    // Swap entre variáveis
    [Arr[i], Arr[menor]] = [Arr[menor], Arr[i]];
  }

  return Arr;
};

const res = selectionSort([1, 5, 4]);
console.log(res);
