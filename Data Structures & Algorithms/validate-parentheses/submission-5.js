class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []; 
        let map = new Map([['[',']'],['{','}'],['(',')']]);

        for(let i = 0 ; i <= s.length - 1 ; i++){
            if(map.has(s[i])){
                stack.push(s[i])
            }else{
                let k = map.get(stack.pop());
                if(k !== s[i]) return false;
            }
        }

        if(stack.length === 0) 
            return true
        else 
            return false

    }
}
