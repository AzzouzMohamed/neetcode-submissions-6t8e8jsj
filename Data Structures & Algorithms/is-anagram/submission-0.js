class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let map = new Map();

        for(let i = 0 ; i <= s.length - 1 ; i++){
            map.set(s[i], (map.get(s[i]) || 0) + 1);
        }

        for(let i = 0 ; i <= t.length - 1 ; i++){
            if(map.has(t[i])){
                const count = map.get(t[i]);
                if(count > 0)
                map.set(t[i], count - 1 );

                if(map.get(t[i]) === 0){
                    map.delete(t[i]);
                }
            }
        }

        if(map.size > 0) {
            return false; 
        }   else {
            return true;
        }


    }
}
