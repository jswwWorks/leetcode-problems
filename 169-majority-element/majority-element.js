/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    let numFreq = {};
    let maxNum = 0;
    let maxFreq = 0;

    for (const num of nums) {
        !!numFreq[num] ? numFreq[num]++ : numFreq[num] = 1;
    }

    for (const num in numFreq) {
        if (numFreq[num] > maxFreq) {
            maxNum = num;
            maxFreq = numFreq[num];
        }
    }

    return maxNum;

};