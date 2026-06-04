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

        for (let c of s){
            abc[c.charCodeAt(0) - 97]+= 1;
        }
        for (let c of t){
            abc[c.charCodeAt(0) - 97]-= 1;
        }

        return abc.every((count: number) => count === 0);


    }
}
