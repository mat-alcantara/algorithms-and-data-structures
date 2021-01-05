const countingSort = (arr, min, max) => {
  let i = min;
  let j = 0;
  const len = arr.length;
  const count = [];
  for (i; i <= max; i += 1) {
    count[i] = 0;
  }
  for (i = 0; i < len; i += 1) {
    count[arr[i]] += 1;
  }
  for (i = min; i <= max; i += 1) {
    while (count[i] > 0) {
      arr[j] = i;
      j += 1;
      count[i] -= 1;
    }
  }
  return arr;
};

const Arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
const res = countingSort(Arr, 0, 100);
console.log(res);
