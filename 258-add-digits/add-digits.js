/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
    let n = num;

    while (String(n).length !== 1) {
        let s = String(n);
        let sum = 0;
        for (const char of s) {
            sum += Number(char);
        }
        n = sum;
    }

    return n;
};
