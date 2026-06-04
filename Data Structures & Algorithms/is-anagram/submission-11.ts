class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length){
            return false;
        }   
        const tMap = Solution.fillMap(t);
        const sMap = Solution.fillMap(s);

        if(tMap.size !== sMap.size){
            return false;
        }
        
        const sKeys = sMap.keys();

        for (const key of sKeys){
            if(tMap.has(key)){
             if (tMap.get(key) !== sMap.get(key)){
                    return false;
            }
            }else{
                return false;
            }
        }

        
        return true;
    }

    static fillMap(s: string): Map<string, number>{
        const result = new Map();
        const tabs = s.split("");
        for (let c of tabs){
            if (result.has(c)) result.set(c, result.get(c)+1);
            else result.set(c, 1);
        }
        return result;
    }
}
