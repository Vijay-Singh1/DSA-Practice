var removeDuplicates = function(nums) {
    let i = 1
    let j = 1
    let k =1

 while(i < nums.length && j < nums.length){
    if(nums[j] !== nums[i-1]){
        nums[i] = nums[j]
        i++
        k++
    }
    j++
 }
 return nums.splice(k)
};


removeDuplicates([0,0,1,1,1,2,2,3,3,4])