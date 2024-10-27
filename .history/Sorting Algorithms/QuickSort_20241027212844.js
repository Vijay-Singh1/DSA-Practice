



const FindPivotIndex = (arr, low, high) =>{

    let pivot = arr[low]
    let i = low;
    let j = high
    let temp;


    while( i < j ){

        while(arr[i] <= pivot && i <= high -1 ){
            i++
        }

        while(arr[j] > pivot && j >= low +1 ){
            j--
        }

        if(i < j){
            // swap(arr[i], arr[j])
            temp = arr[i]
            arr[i] =arr[j]
            arr[j]=temp
        }
    }

    // swap(arr[j], pivot)
    temp = arr[j]
    arr[j] =arr[low]
    arr[low]=temp

    return j

}



const QuickSort = (arr, low, high) =>{
    if (low < high) {
    const pivotIndex = FindPivotIndex(arr, low, high)
    QuickSort(arr, low, pivotIndex-1)
    QuickSort(arr, pivotIndex+1, high)
    
    }
    return arr
}


const unsortedArray = [64, 56,23454,432,67,8,9,0,34, 25, 12, 22, 11, 90];
const QuicksortArray = QuickSort(unsortedArray, 0, unsortedArray.length-1);

module.exports = {
    QuicksortArray,
};

console.log(QuicksortArray)