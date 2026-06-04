class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let stab = Array.from(s).sort().join();
        let ttab = Array.from(t).sort().join();
        return stab === ttab;

    }
}
