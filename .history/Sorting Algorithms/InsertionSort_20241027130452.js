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


console.log(InsertionSort([234,34,1,5647,4,0,-1, -1324]))