const sumAll = function(first, last) {
    let sum = 0;
    if (first > last) {
        let temp = first;
        first = last;
        last = temp;
    }
    if (first < 0 || last < 0 || typeof(first) != "number" || typeof(last) != "number") {
        return 'ERROR';
    }
    for (i = first; i <= last; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
