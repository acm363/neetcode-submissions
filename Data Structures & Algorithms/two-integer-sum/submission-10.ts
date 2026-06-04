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

        nums.forEach((num, index)=> {
            const diff = target - num;
            diffMap.set(index, diff)
        })

        

        for (const i of diffMap.keys()){
                const value = diffMap.get(i);
                 let j = nums.indexOf(value);
                 if (j!==-1 && i !==j && nums[i]+nums[j] === target){
                    return [i,j]
                 }
            }
        }
}
