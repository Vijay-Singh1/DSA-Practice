const InsertionSort = (arr) =>{


    for(i=1;i<arr.length;i++){

        const key = arr[i]
        let j = i-1

        while(j>=0 && key < arr[j]){
           arr[j+1] = arr[j]
           j--
        }

        arr[j+1] = key

        

    }
    return arr
}


console.log(InsertionSort([12, 11, 13, 5, 6];))