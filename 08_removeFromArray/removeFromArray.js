const removeFromArray = function(array, ...arg) {
    return array.filter(answer => !arg.includes(answer));
};

// Do not edit below this line
module.exports = removeFromArray;
