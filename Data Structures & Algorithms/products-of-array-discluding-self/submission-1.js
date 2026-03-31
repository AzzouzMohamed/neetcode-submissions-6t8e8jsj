class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let rst = [];
        let prefix = new Array(n);
        let suffix = new Array(n);

        prefix[0] = 1;
        for( let i = 1 ; i <= nums.length -1 ; i++){
            prefix[i] = nums[i - 1 ] * prefix[i - 1]; 
        }

        
        suffix[n - 1 ] = 1 ;
        for( let j = nums.length - 2 ; j >= 0 ; j--){
            suffix[j] = nums[j + 1 ] * suffix[j + 1 ];
        }


        for( let i = 0 ; i <= nums.length - 1 ; i++){
            rst.push(suffix[i] * prefix[i]);
        }

        return rst;
    }
}
