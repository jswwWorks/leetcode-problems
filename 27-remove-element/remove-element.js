/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

    let nonValsCount = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === val) {
            nums.splice(i, 1);
            i--; // altering the index because of the splice
        } else {
            nonValsCount++;
        }
    }

    return nonValsCount;

};