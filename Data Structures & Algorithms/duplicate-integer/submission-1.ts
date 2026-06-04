class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let numsSet: Set<number> = new Set();

        for (const num of nums){
            if (!numsSet.has(num)){
                numsSet.add(num);
            }else {
                return true
            }
        }
        return false;
    }
}
