var relativeSortArray = function(arr1, arr2) {
        let resultArray = []
        for(i=0; i< arr2.length; i++){

          
            for(j=0; j< arr1.length; j++){
                  if(arr2[i] === arr1[j]){
                    resultArray.push(arr1[j])
                    arr1[j] = -1
                  }
            }
        }

        for(k=1; k<arr1.length; k++){
          let key = arr1[k]
          let l = k-1

          while(l >= 0 && arr1[l] > key){
            arr1[l+1] = arr1[l]
            l--
          }
          arr1[l+1] = key
        }

        for(p=0; p<arr1.length; p++){
          if(arr1[p] !== -1){
            resultArray.push(arr1[p])
          }
        }
   
      return resultArray
    };

    console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
    

    module.exports ={relativeSortArray}