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




        return Array.from(map.keys())
        .sort((a, b) => map.get(b) - map.get(a)) // Sort descending
        .slice(0, k);;

    }
}
