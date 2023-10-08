const palindromes = function (string) {
    string = string.toLowerCase();
    let array = Array.from(string);
    for (i = 0; i < array.length; i++) {
        if (!(array[i].charCodeAt(0) >= 97 && array[i].charCodeAt(0) <= 122) && !(array[i].charCodeAt(0) >= 48 && array[i].charCodeAt(0) <= 57)) {
            array.splice(i, 1);
            i--;
        }
    }
    for (i = 0; i < array.length; i++) {
        if (array[i] !== array[array.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
