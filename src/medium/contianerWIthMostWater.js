/**
 * runtime: O(n)
 * space: O(1);
 */
var maxArea = function(height) {
    let maxArea = 0;
    let leftPointer = 0;
    let rightPointer = height.length-1;
    let currentSize;
    while(leftPointer !== rightPointer) {
        currentSize = (rightPointer - leftPointer) * (Math.min(height[leftPointer], height[rightPointer]));
        maxArea = currentSize > maxArea ? currentSize : maxArea;
        if(height[leftPointer] > height[rightPointer]) {
            rightPointer--;
        }
        else {
            leftPointer++;
        }
    }
    
    return maxArea; 
};