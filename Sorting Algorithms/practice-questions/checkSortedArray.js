var check = function(nums) {
    let count = 0
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] < nums[i-1]){
            count ++
        }
    }
    if(nums[nums.length-1] > nums[0] ){
        count++
    }

    if(count <= 1){
        return true
    }else{
        return false
    }
};

console.log(check([2,1,3,4]))