const { BubbleSortArray } = require('./Sorting Algorithms/BubbleSort')
const {  SelectionSortArray } = require('./Sorting Algorithms/SelectionSort')

const app = require('express')()

const Port = 3001


console.log("selection sort", SelectionSortArray)
console.log("Bubble sort",BubbleSortArray)

app.listen(Port,() =>{
    console.log(`server is running on port ${Port}`)
})