class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let rslt = new Map();

        for(let str of strs){
            let count = new Array(26).fill(0);
            for(let c of str){
                count[ c.charCodeAt(0) - 'a'.charCodeAt(0) ]+= 1; 
            }

            let key = count.join(",");
            if(!rslt.get(key)) rslt.set(key, [] ) ;

            rslt.get(key).push(str);
        }

        console.log(rslt);
        return Array.from(rslt.values());
    }
}
