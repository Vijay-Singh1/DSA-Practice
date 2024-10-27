
const mergearray = (arr, low, mid, high) =>{
    let tempArray = []
    let left = low
    let right = mid + 1

    while(left <= mid && right <= high){
        if(arr[left] <= arr[right]){
            tempArray.push(arr[left])
            left++;
        }else{
            tempArray.push(arr[right])
            right++
        }
    }

    while(left <= mid){
        arr.push(arr[left])
        left++
    }

    while(right <= high){
        arr.push(arr[right])
        right++
    }


    for(i = low; i < high; i++){
        arr[i] = tempArray[i - low]
    }



   
}


const MergeSort =(arr, low, high) =>{

    let mid = Math.floor(low + (high - low) / 2);

    if(low >= high){
        return
    }

    MergeSort(arr, low, mid);
    MergeSort(arr, mid+1, high)
    mergearray(arr, low, mid, high)

return arr
 
}


const unsortedArray = [64, 56,23454,432,67,8,9,0,34, 25, 12, 22, 11, 90];
const MergeSortArray = MergeSort(unsortedArray, 0, unsortedArray.length-1);

console.log(MergeSortArray)