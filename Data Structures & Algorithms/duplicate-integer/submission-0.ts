class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let numsMap: Map<number, number> = new Map();
        let found = false;
        let index = 0;
        while (!found && index < nums.length){
            const currentValue = nums[index];
            if (!numsMap.has(currentValue)){
                numsMap.set(currentValue, 1);
            }else {
                found = true;
            }
            index++
        }
    return found;
    }
}
