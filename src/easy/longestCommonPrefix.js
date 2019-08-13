/**
 * Consider k to be the length of the first word in the array. 
 * Can be improved by going over the array, find the shortest word, and use it. 
 * 
 * runtime O(n*k)
 * space complexity O(1)
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) {
        return '';
    }
    if(strs.length === 1) {
        return strs[0];
    }
    let prefix = '';
    let substrIdx = 1;
    for(let j = 0; j<strs[0].length; j++) {
        for(let i = 1; i<strs.length;  i++) {
            prefix = strs[0].substring(0, substrIdx);
            if(strs[i].substring(0, substrIdx) !== prefix) {
                return prefix.substring(0, prefix.length-1);
            }
        }
        substrIdx++;
    }
    
    return prefix;
};