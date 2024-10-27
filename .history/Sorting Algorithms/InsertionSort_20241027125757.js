const InsertionSort = (arr) =>{


    for(i=1;i<arr.length;i++){

        const key = arr[i]
        let j = i-1

        while(j>=0 && key < arr[i-1]){
            
            arr[i + 1 ] = arr[i-1]

            j--

        }

        arr[j] = key

    }
    return arr
}


console.log(InsertionSort([9,14,15,12,6,8,13]))