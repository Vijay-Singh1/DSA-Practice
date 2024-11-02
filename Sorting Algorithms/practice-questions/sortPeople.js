var sortPeople = function(names, heights) {

    for (let i = 1; i < heights.length; i++) {
        
        let key = heights[i]
        let name = names[i]
        let j = i-1
        while(j >= 0 && key > heights[j]){
            heights[j+1]= heights[j]
            names[j+1] = names[j]
            j--
        }
        heights[j+1] = key
        names[j+1] = name
    }

    console.log(names)
    console.log(heights)
    
}

sortPeople(["Alice","Bob","Bob"], [155,185,150])