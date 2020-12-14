const Arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 1000));

const partition = (arr, low, high) => {
  // Elemento de pivot
  const pivot = arr[high];

  // Index do menor elemento
  let i = low - 1;

  for (let j = low; j <= high - 1; j += 1) {
    if (arr[j] < pivot) {
      i += 1;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
};

const quickSort = (arr, low, high) => {
  // Verifica se há mais de 1 index
  if (low < high) {
    // a variável pi se refere ao partition index
    const pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }

  // return arr;
};

quickSort(Arr, 0, Arr.length - 1);

console.log(Arr);
