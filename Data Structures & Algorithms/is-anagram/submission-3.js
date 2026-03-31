class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let map1 = new Map();
        let map2 = new Map();

        for(let i = 0 ; i <= s.length - 1 ; i++){
            map1.set(s[i], (map1.get(s[i]) || 0) + 1);
            map2.set(t[i], (map2.get(t[i]) || 0) + 1);
        }

        for(let i = 0 ; i <= map1.size -1 ; i++){
            if(map1.get(s[i]) !== map2.get(s[i])){
                return false;
            }
        }

        return true;

    


    }
}
