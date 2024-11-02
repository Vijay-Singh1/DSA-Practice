const { BubbleSortArray } = require('./Sorting Algorithms/BubbleSort')
const { merge } = require('./Sorting Algorithms/practice-questions/mergeTwoSortedArray')
const { relativeSortArray } = require('./Sorting Algorithms/practice-questions/relativeSortArray')
const { rotate } = require('./Sorting Algorithms/practice-questions/rotateArray')
const { QuicksortArray } = require('./Sorting Algorithms/QuickSort')
const {  SelectionSortArray } = require('./Sorting Algorithms/SelectionSort')

const app = require('express')()

const Port = 3001


// console.log("selection sort", SelectionSortArray)
// console.log("Bubble sort",BubbleSortArray)
// console.log("Quick sort",QuicksortArray)
// console.log("relativeSortArray", relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]) )
// console.log(merge([4,5,6,0,0,0],3,[1,2,3], 3))
console.log(rotate([1,2,3,4,5,6,7], 3))

app.listen(Port,() =>{
    console.log(`server is running on port ${Port}`)
})