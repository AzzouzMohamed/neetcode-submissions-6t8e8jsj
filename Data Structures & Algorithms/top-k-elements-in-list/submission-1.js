class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for( let n of nums ){
            const count = (map.get(n) || 0) + 1;
            map.set(n, count);
        }




        return Array.from(new Map([...map.entries()]
        .sort( ([,v1], [,v2]) => v2- v1 ))
        .keys()).slice(0 , k );

    }
}
