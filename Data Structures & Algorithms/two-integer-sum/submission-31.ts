class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        if (nums.length == 2) {
            return [0, 1];
        }
        const diffMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const curr = nums[i];
            const diff = target - curr;

            if (diffMap.has(curr)) {
                return [diffMap.get(curr), i];
            } else {
                if (!diffMap.has(diff)) {
                    diffMap.set(diff, i);
                }
            }
        }
    }
}
