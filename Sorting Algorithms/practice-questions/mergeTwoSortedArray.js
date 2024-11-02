const { BubbleSortArray, BubbleSort } = require("../BubbleSort");

var merge = function (nums1, m, nums2, n) {
  let left = m == 0 ? 0 : m - 1;
  let second = n == 0 ? 0 : n - 1;
  while (left >= 0 && second < n - 1 ) {
    if (nums1[left] < nums2[second]) {
      let temp = nums1[left];
      nums1[left] = nums2[second];
      nums1[left] = temp;
      left++;
      second++;
    }
  }

  for (let index = 0; index < nums2.length; index++) {
    nums1.push(nums2[index]);
  }
  for (let index = 1; index < nums1.length; index++) {
    let key = nums1[index];
    let l = index - 1;

    while (l >= 0 && key < nums1[l] ) {
      nums1[l + 1] = nums1[l];
      l--;
    }
    nums1[l + 1] = key;
  }
  return nums1;
};

console.log(merge([-1,0,1,1,0,0,0,0,0], 4, [-1,0,2,2,3], 5));

module.exports = {
  merge,
};
