class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length <= 1) return nums.length;

        let newSet = new Set(nums);
        let start = new Array();
        let seq = new Set();
        for(let i  = 0; i <= nums.length -1 ; i++ ){
            if(!newSet.has(nums[i] - 1 )){
                start.push(nums[i]);
            }
        }
        let i = 0;
        let j = 1;
        let maxSeq = 0;

        while(i <= start.length){
            if(newSet.has( start[i] + j )){
                seq.add( start[i] + j );
                j++;
            }else{
                seq.clear();
                j = 1;
                i++;
            }

            maxSeq = Math.max(maxSeq, seq.size);

        }




        return maxSeq + 1;

    }
}
