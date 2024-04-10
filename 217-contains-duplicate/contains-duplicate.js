/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    let freqs = {};

    for (const num of nums) {
        (freqs[num] >= 1) ? freqs[num]++ : freqs[num] = 1;
    }

    for (const freq in freqs) {
        if (freqs[freq] > 1) return true;    
    }

    return false;
};