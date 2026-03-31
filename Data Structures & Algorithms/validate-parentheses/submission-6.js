class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = new Map([['[',']'],['{','}'],['(',')']]);
        let i = 0;
        while( s.length  > 0 ){
            if(map.has(s[i])){
                i++;
            }else{
                if(map.get(s[i - 1 ]) === s[i]){
                  s =   s.substring(0, i -1) + s.substring(i + 1 );
                  console.log(s);
                    i = i - 1 ;
                } else{
                    return false;
                }
            }
        }

        return true;

    }
}
