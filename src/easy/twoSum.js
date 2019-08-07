/**
 * Runtime: O(n)
 * Space complexity: O(n)
 * 
 */
var twoSum = function(nums, target) {
    let map = {};
    nums.forEach((num, index) => {
        map[num] = index;
    });
    for(let i = 0; i<nums.length; i++) {
        let numToFind = target - nums[i];
        if(map.hasOwnProperty(numToFind) && map[numToFind] !== i) {
            return [i, map[numToFind]]
        }
    }
};