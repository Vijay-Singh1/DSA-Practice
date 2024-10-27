const InsertionSort = (arr) =>{


    for(i=1;i<arr.length;i++){

        const key = arr[i]
        const j = i-1

        while(j>=0 && key < arr[i-1]){
            
            arr[i + 1 ] = arr[i-1]

            j--

        }

        arr[j] = key

    }
}


console.log(InsertionSort([9,14,15,12,6,8,13]))