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

       for (let i = 0; i < s.length; i++) {
    abc[s.charCodeAt(i) - 97]++;
    abc[t.charCodeAt(i) - 97]--;
}

        return abc.every((count: number) => count === 0);


    }
}
