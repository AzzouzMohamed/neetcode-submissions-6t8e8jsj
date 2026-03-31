class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s = "";
        for(let str of strs){
            for(let char of str){
            
                s = s + String.fromCharCode(char.charCodeAt(0) + 10);
            }
            s = s + String.fromCharCode("°".charCodeAt(0) + 10);
        }

        return s;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = [];
        let s = "";
        for(let char of str){
            let newChar =String.fromCharCode(char.charCodeAt(0) - 10)
            if( newChar !== "°"){
                s = s + newChar;
            }else {
                strs.push(s);
                s = "";
            } 
        }

        return strs;
        
    }
}
