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
        let i = 0;
        let j =1;     
        let found = false;
        
        while(!found && (i < nums.length)){
               while (j < nums.length){
                  found = nums[i]+nums[j]=== target;
                  if (found){
                    return [i,j];
                  }
                  j++;
               }
                i++;
                j = i +1;
        }
       
        return [i,j];       
    }
}
