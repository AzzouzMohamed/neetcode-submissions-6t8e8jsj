class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map();

        for(let i = 0 ; i < nums.length ; i++){
            count.set( nums[i], (count.get(nums[i]) | 0 ) + 1);
        }


        const minHeap = new MinPriorityQueue((x) => x[1]);

        for(const [ num , feq ] of count.entries()){
            minHeap.enqueue([ num , feq]);
            if(minHeap.size() > k ) minHeap.dequeue();
        }

        let res = [];
        for(let i = 1 ; i <= k ; i++){
            const [ num , feq] = minHeap.dequeue();
      
            res.push(num);
        }

        return res;
    }
}
