/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  map = {};
  for (let idx in nums) {
    if (!map[target - nums[idx]]) {
      map[nums[idx]] = idx;
    } else {
      return [~~map[target - nums[idx]], ~~idx];
    }
  }
};
