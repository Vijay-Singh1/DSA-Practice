const  getSecondLargest =(arr) => {
        
    let l = arr[0]
    let sl = -1
    
    for(let i=1; i< arr.length; i++){
        if(arr[i] > l){
            l = arr[i]
        }
    }
    
    for (let j = 0; j < arr.length; j++) {
       if(arr[j] > sl && arr[j] < l){
        sl = arr[j]
       }
    }
   return sl
    
    // Code Here
}


console.log(getSecondLargest([10, 10]))