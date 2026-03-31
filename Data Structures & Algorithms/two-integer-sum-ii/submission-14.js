class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let start = 0 ; 
        let end  = nums.length - 1 ;
        while(start < end){
            let s = nums[start] + nums[end];
            if( target < s ) {
                end = end - 1;    ;
            }

            if( target > s ){
                start = start + 1; ;
            }

            if( target === s ){
                return [ start + 1  , end + 1];
            }
        }

      

    }
}
