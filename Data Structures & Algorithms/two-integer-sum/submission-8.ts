class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        /**
         * 
tab = 4 5 6,   10
m = 
 0 4 -> 10 -4 6 on ajoute dans la map le set clé valeur 0 - 6
 1 5 > 10 -5 5
 2 6 > 10 -6 = 4, mais 
 on construie un map où clé valeur = l'index, valeur donc map({4:0, 5:1, 6:2})
 est ce que ma map contient ma diff ? oui, si oui à quel index ?
7 
 3 4 5 6

index: diff
0: 4, 1: 3, 2 :2, 3:1
         */

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
