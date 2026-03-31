class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sew = new Map( [ [nums[0] , 0] ] );
        for( let  i = 1 ; i <= nums.length - 1 ; i++ ){
            let n = sew.get(target - nums[i]);
            if( n !== undefined ){
                return [ n +1  , i + 1];
            } else {
                sew.set(nums[i], i);
            }
         
        }
    }
}
