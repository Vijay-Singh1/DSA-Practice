const BubbleSort = (arr) => {
  let swapped = false;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp;
        (temp = arr[j]), (arr[j] = arr[j + 1]), (arr[j + 1] = temp);
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return arr;
};

const unsortedArray = [5, 1, 6, 3, 10, 4, 77, 4, 35, 6, 45];
const sortedArray = BubbleSort(unsortedArray);

console.log(sortedArray);
