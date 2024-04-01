/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    let foundWord = false;
    let length = 0;

    for (let i = s.length - 1; i >= 0; i--) {

        if (s[i] === " " && foundWord === true) {
            return length; // when we hit a space after finding word
        } else if (s[i] !== " ") {
            foundWord = true;
            length++;
        }
    }

    return length;
};