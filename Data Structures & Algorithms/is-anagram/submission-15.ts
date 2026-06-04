class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false;
        }
        const abc = new Array(26).fill(0);

        for (let i = 0; i < s.length; i ++){
            abc[s[i].charCodeAt(0) - 97]+= 1;
            abc[t[i].charCodeAt(0) - 97]-= 1;
        }

        return abc.every((count: number) => count === 0);


    }
}
