const repeatString = function(word, num) {
    if (num < 0) return "ERROR";
    let i = (num);
    let string = ""
    for (i = 0; i < (num); i++){
        string += word;
    }
    return string;
};
// Do not edit below this line
module.exports = repeatString;
