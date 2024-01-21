/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length;

    let realIndex = 1;
    // do search
    for(let i = 1; i < nums.length ; i++) {
        if (nums[i-1] === nums[i]) {
            if (nums[i+1] === nums[i]) {
                // skip
            } else {
                nums[realIndex-1] = nums[i-1];
                nums[realIndex++] = nums[i];
            }
        } else {
            nums[realIndex++] = nums[i];
        }
    }

    return realIndex;
};