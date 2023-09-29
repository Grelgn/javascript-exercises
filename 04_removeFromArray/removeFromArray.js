const removeFromArray = function(array, ...removals) {
    for (i = 0; i < array.length; i++) {
        if (removals.includes(array[i])) {
            array.splice(i, 1);
            i--;
            //i-- is needed here so we don't skip checking the next element that moved down after the splice.
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
