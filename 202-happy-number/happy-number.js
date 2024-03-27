/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

    let allNums = [];

    while (n !== 1 && allNums.includes(n) === false) {
        
        allNums.push(n); // add n to allNums
        let currN = 0;
        nStr = String(n);
        
        for (const nChar of nStr) {
            let val = Number(nChar); // turn value back to a number
            currN += Math.pow(val, 2);
        }

        n = currN; // reassign currN to n
    }

    return n === 1 ? true : false; // checks whether it's happy
};
