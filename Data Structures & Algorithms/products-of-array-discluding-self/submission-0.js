class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix =  1 ; 
        let rst = [];
        for( let i = 0 ; i <= nums.length - 1 ; i++){
            prefix = 1;
            for( let k = 0 ; k <= nums.length -1 ; k++){
                if( i !== k ){
                    prefix = prefix *  nums[k];
                }
            }
            rst.push(prefix);
        };

        return rst;
        
    }
}


