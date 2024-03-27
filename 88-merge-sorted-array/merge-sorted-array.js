/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let idxM = 0;
    let idxN = 0;

    nums1.splice(m, n);

    while (idxM < (m + n)) {

        let valM = nums1[idxM];
        let valN = nums2[idxN];

        if (valN <= valM || valM === undefined) {
            nums1.splice(idxM, 0, valN); // insert valN into nums1
            idxN++; 
        } else {
            idxM++;
        }

    }

};
