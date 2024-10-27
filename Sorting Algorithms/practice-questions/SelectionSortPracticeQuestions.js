var sortSentence = function(s) {
    const stringS = s.split(" ") 
    for(i=0; i<stringS.length; i++){
        let min = i

        for(let j = i+1; j < stringS.length; j++){

            if(parseInt(stringS[j].charAt(stringS[j].length-1)) < parseInt(stringS[min].charAt(stringS[min].length-1))){
                min = j
            }
        }

        let temp = stringS[i]
        stringS[i] = stringS[min]
        stringS[min] = temp
    }

    for(let k=0; k<stringS.length; k++){
        stringS[k] = stringS[k].slice(0, stringS[k].length-1 ) 
    
    }
 
    s = stringS.join(" ")

    return s
    
};






const unsortedArray = "is2 sentence4 This1 a3"
const SelectionSortArray = sortSentence(unsortedArray);

console.log(SelectionSortArray)