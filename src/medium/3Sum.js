/**
 * runtime O(n^2)
 * space complexity O(n)
 */
var threeSum = function(nums) {
    if(nums.length < 3) {
        return [];
    }
    nums.sort((a,b) => a-b);
    let currentSum;
    let solution = [];
    let target = 0;
    for(let i=0; i<nums.length; i++) {
        if(i >0 && nums[i] === nums[i-1]) continue;
        let leftIdx = i+1;
        let rightIdx = nums.length-1;
        while(leftIdx < rightIdx) {
            currentSum = nums[i] + nums[leftIdx] + nums[rightIdx];
            if(currentSum === target) {
                if(nums[leftIdx] !== nums[leftIdx-1] || nums[rightIdx] !== nums[rightIdx+1]) {
                    solution.push([nums[i], nums[leftIdx] ,nums[rightIdx]]);    
                }
                rightIdx--;
                leftIdx++;
            }
            else if(currentSum > target) {
                rightIdx--;
            }
            else {
                leftIdx++;
            }
        }
    }
    return solution;
};