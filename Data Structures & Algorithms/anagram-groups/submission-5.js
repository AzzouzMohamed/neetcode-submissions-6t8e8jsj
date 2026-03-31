class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    stringMap(str){
        let strMap = new Map();
        for(let s of str){
            strMap.set(s, (strMap.get(s) || 0 ) + 1 );
        }

        return strMap;
    }

    verifyMaps(strMap, strMaps ){

        let indexFound = strMaps.length;
        for (let [index, sMap] of strMaps.entries()) {
            let match = true;
            if(strMap.size !== sMap.size){
                continue;
            }
    
            for (let [key, value] of strMap) {
                if (sMap.get(key) !== value) {
                    match = false;
                    break;
                }
            }

            if(match) return index;
        }


        strMaps.push(strMap);

        return indexFound ;
    }

    groupAnagrams(strs) {
        let array = [];
        let strMaps = [];

        for(let str of strs){
            let idx = this.verifyMaps(this.stringMap(str), strMaps);
            if (!array[idx]) array[idx] = [];
            array[idx].push(str);       
        }

        return array;
    }
}
