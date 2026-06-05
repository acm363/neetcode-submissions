class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const sortedMap = new Map<string, string[]>;

        for (const str of strs){
            const sortedStr = str.split('').sort().join();
            if (sortedMap.has(sortedStr)){
                sortedMap.get(sortedStr).push(str);
            }else{
                sortedMap.set(sortedStr, [str]);
            }
        }
        let result : string[][] = [];
        sortedMap.forEach((list, _)=>{
                    result.push(list)
        });
        return result;
    }
}
