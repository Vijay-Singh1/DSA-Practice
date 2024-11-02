// var rotate = function(nums, k) {

//     let temp 
    

//     for (let i = nums.length-1; i >= nums.length-k; i--) {

//         temp = nums[nums.length-1]
//         let j = nums.length-1
//         while(j > 0 ){
//             nums[j] = nums[j-1]
//             j--
//         }
//          nums[j] = temp
        
        
//     }

//     return nums
    
// };
const reverseArray = ( start, end, array,) =>{
    let temp;
    while(start < end){
        temp = array[start]
        array[start] = array[end]
        array[end]= temp
        start++
        end--
    }


    return array
}
var rotate = function(nums, k) {

    k = k % nums.length;
    reverseArray(0, nums.length-1, nums)
    reverseArray(0, k-1, nums)
    reverseArray(nums.length-k, nums.length-1, nums)
    return nums
    
};

module.exports={
    rotate
}

console.log(rotate([-1], 2))