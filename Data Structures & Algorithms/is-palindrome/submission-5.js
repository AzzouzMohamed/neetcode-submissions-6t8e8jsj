class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let n = Math.floor(s.length / 2);
         s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        console.log(s);
        for (let i = 0 ; i <= n ; i++){
           let  j = s.length - 1  - i;
            if(s[j]  !== s[i]){
                return false;
            }
        }

        return true;
    }
}
