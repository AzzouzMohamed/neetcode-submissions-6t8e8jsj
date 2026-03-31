class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if( nums.length === 0 ) return 0;
        let set = new Set(nums);
        let seq = new Set([nums[0]]);
        let before = nums[0] -  1 ;
        let after = nums[0] + 1;
        let i = 0;
        let maxSeq = 0;
        while( i < nums.length || set.size > 1 ){
            if(set.has(before) || set.has(after)){
                if(set.has(before)){
                    seq.add(before);
                    set.delete(before);
                    before = before -1 ;
                }

                if(set.has(after)){
                    seq.add(after);
                    set.delete(after);
                    after = after + 1;

                }
            }else{
                console.log("seq",seq);
                console.log("set",set);
                maxSeq = Math.max(maxSeq, seq.size);
                set.delete(nums[i]);
                i++;
                seq.clear();
                seq.add(nums[i]);
                before = nums[i] - 1 ;
                after = nums[i] + 1;
            }
       
        }

 
        return maxSeq ;
    }
}
