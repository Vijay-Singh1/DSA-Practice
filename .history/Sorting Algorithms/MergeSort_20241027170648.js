
const mergerray = (arr, low, mid, high) =>{
    const tempArray = []
    const left = low
    const right = mid + 1

    while(left <= mid && rigth <= high){
        if(arr[left] < arr[right]){
            tempArray.push(arr[left])
            left++;
        }else{
            tempArray.push(arr[right])
            right++
        }
    }

    while(left > mid){
        arr.push(arr[right])
        right++
    }

    while(right > high){
        arr.push(arr[left])
        left++
    }


    return tempArray
}


const MergeSort =(arr, low, high) =>{

    let mid = (low + high) /2

    if(low == high){
        return
    }

    MergeSort(arr, low, mid);
    MergeSort(arr, mid+1, high)
    const sortedrray = mergerray(arr, low, mid, high)


    return sortedrray
}


const unsortedArray = [64, 56,23454,432,67,8,9,0,34, 25, 12, 22, 11, 90];
const MergeSortArray = MergeSort(unsortedArray, 0, unsortedArray.length-1);

console.log(MergeSortArray)