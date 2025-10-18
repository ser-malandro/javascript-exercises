const leapYears = function(year) {
    const isCentury = year % 100 === 0;
    const isLeap = year % 4 === 0;
    const isYearDivisibleByFourH = year % 400 === 0;

    if (isLeap && (!isCentury || isYearDivisibleByFourH)
    ){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
