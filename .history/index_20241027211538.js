const { BubbleSortArray } = require('./Sorting Algorithms/BubbleSort')
const { QuicksortArray } = require('./Sorting Algorithms/QuickSort')
const {  SelectionSortArray } = require('./Sorting Algorithms/SelectionSort')

const app = require('express')()

const Port = 3001


// console.log("selection sort", SelectionSortArray)
// console.log("Bubble sort",BubbleSortArray)
console.log("Quick sort",QuicksortArray)

app.listen(Port,() =>{
    console.log(`server is running on port ${Port}`)
})