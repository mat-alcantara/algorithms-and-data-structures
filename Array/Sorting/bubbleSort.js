/*
  Percorre toda a array, elemento por elemento, comparando com o elemento seguinte.
  Caso seja menor que o elemento seguinte, ambos serão trocados de lugar.
  O loop termina quando nenhuma troca for feita.
*/

const bubbleSort = a => {
  let swapped;

  /*
    Caso um elemento seja menor que o seguinte, faz a troca e muda a variável
    swapper para positivo. Em seguida o While checará se aquela variável é
    verdadeira ou falsa, e caso seja verdadeira, fará o loop novamente. Quando
    nenhuma troca for feita, swapped continuará falsa e o loop se encerrará.
  */
  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i += 1) {
      if (a[i] > a[i + 1]) {
        const temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return a;
};

const res = bubbleSort([2, 4, 5, 6, 2, 7, 4, 6, 3, 5]);
console.log(res);
