/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
        if (i === 0 && nums[i] > target) return 0;
        if (target < nums[i + 1] && target > nums[i]) return i + 1;
    }
    
    return nums.length; // this length is also the idx value of whatever gets added to the end
};
