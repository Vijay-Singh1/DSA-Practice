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

const unsortedArray =[64, 56,23454,432,67,8,9,0,34, 25, 12, 22, 11, 90];
const BubbleSortArray = BubbleSort(unsortedArray);


module.exports = {BubbleSortArray}
