var sortList = function(head) { 

    for(i = 1; i< head.length; i++){
        let key = head[i]
        let j = i-1
     
        while(j>=0 &&   key < head[j]){
            
            head[j+1] = head[j]
             j--
        }
        head[j+1] = key

       
    }
 

    return head
    
};


const unsortedArray =[-1,5,3,4,0]

sortList(unsortedArray)