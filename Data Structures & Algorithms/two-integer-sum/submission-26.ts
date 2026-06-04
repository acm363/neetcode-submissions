class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        if(nums.length == 2){
            return [0,1];
        }
        const diffMap =  new Map<number,number>();

        for (let i =0; i < nums.length; i++){
              const diff = target - nums[i];

              if (diffMap.has(nums[i])){
                return [diffMap.get(nums[i]), i];
              }else{
                diffMap.set(diff, i);
              }
        }
        return [0,1]
}}
