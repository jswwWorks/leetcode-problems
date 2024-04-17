/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    
    let numFreqs = {};
    let numIdxs = {};
    let goodArrs = []; // will be an array of idx arrays

    // first, generate counters
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (numFreqs[num] >= 1) {
            numFreqs[num]++;
            numIdxs[num].push(i);
        } else {
            numFreqs[num] = 1;
            numIdxs[num] = [i];
        }
    }

    // for any #s with duplicates, add idx array to goodArrs
    for (const num in numFreqs) {
        if (numFreqs[num] >= 2) {
            goodArrs.push(numIdxs[num]);
        }
    }

    for (const arr of goodArrs) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if ((arr[j] - arr[i]) <= k) return true;
            }
        }
    }

    return false;
};
