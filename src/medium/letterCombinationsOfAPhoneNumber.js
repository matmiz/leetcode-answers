/**
 * runtime: O(n^2)
 * space: O(1) 
 */
const LETTERS_MAP = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
};
var letterCombinations = function(digits) {
if(!digits.length) {
    return [];
}
if(digits.length === 1) {
    return LETTERS_MAP[digits[0]];
}
return LETTERS_MAP[digits[0]].reduce((acc, val) => {
    return acc.concat(letterCombinations(digits.substring(1)).map(el => {return val + el}));
}, []);
};