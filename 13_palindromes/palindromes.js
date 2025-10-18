const palindromes = function (string) {
    const alphanums = "abcdefghijklmnopqrstuvxwxyz123456789";
    const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanums.includes(character))
    .join('');
    
    const reverse = cleanedString.split('').reverse().join('');

    return cleanedString === reverse;
};

// Do not edit below this line
module.exports = palindromes;
