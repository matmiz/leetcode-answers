/**
 * 
 * n is the length of the number
 * Runtime: O(n)
 * Space complexity: O(1)
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    x = "" + x;
    let indexLeft = Math.floor(x.length/2) -1;
    let indexRight = Math.ceil(x.length/2);
    while(indexLeft >= 0) {
        if(x[indexLeft] !== x[indexRight]) {
            return false;
        }
        indexLeft--;
        indexRight++;
    }
    return true
};
