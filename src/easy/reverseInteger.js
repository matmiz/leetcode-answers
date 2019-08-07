
/**
 *  n is the length of the string.
 * 
 *  Runtime: O(n)
 *  Space complexity: O(n)
 */
var reverse = function(x) {
    let sign = '';
    let ans;
    if(x < 0) {
        x = x*-1;
        sign = '-';
    }
    ans = sign + ((x + "").split('').reverse().join(''));
    if((sign && ans < (Math.pow(2,31)*-1)) || (!sign && ans > Math.pow(2,31))) return 0;
    return ans;
};