class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }
        const stab = s.split("").sort();
        const ttab = t.split("").sort();
        // "ajm" "ajr"
        let i = 0;
        while(i < stab.length){
            if(stab[i] !== ttab[i]) {
                return false;
            }
            i++;
        }
        return true;
 }
}
