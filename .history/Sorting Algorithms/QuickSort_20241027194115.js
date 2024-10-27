
const swap =(item1, item2) =>{
let temp = item1
item1 =item2
item2=temp
}


const FindPivotIndex = (arr, low, high) =>{

    let pivot = arr[low]
    let i = low;
    let j = high


    while( i < j ){

        while(arr[i] <= pivot && i < high ){
            i++
        }

        while(arr[j] >= pivot && j > low ){
            j--
        }

        if(i < j){
            swap(arr[i], arr[j])
        }
    }

    swap(arr[j], pivot)

    return arr

}



const QuickSort = () =>{

    if(low >= high){
        return arr
    }


    const pivotIndex = FindPivotIndex(arr, low, high)

}



const unsortedArray = [64, 56,23454,432,67,8,9,0,34, 25, 12, 22, 11, 90];
const QuicksortArray = QuickSort(unsortedArray, 0, unsortedArray.length-1);

console.log(QuicksortArray)