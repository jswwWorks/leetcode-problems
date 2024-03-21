/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let prefix = "";
    let idx = 0;
    let samePref = true;

    while (samePref === true) {

        let currChar = strs[0][idx]; // the character of study

        if (currChar === undefined) return prefix;

        for (const word of strs) {
            if (word[idx] !== currChar) { // if a mismatch, return
                return prefix;
            }
        }

        prefix += currChar; // append currChar to prefix
        idx++; // add to idx @ end of loop
    }

    return prefix;

};
