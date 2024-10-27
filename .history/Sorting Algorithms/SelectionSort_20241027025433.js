const SelectionSort = (arr) => {
  let temp;
  let swapped = false;

  for (i = 0; i < arr.length - 1; i ++) {
    let minIndex = i;

    for (j = i+1; j < arr.length ; j++) {
      if (arr[j] < arr[minIndex]) {
        swapped = true;
        minIndex = j;
      }
    }

   
  }

  return arr;
};

const unsortedArray = [64, 56,23454,432,67,8,9,0,34, 25, 12, 22, 11, 90];
const SelectionSortArray = SelectionSort(unsortedArray);

module.exports = {
    SelectionSortArray,
};
