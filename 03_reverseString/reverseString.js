const reverseString = function(string) {
    let result = []
    for (i = 0; i < string.length; i++) {
        result.push(string[string.length - i - 1])
    }
    result = result.join('')
    return result;
};

// Do not edit below this line
module.exports = reverseString;
