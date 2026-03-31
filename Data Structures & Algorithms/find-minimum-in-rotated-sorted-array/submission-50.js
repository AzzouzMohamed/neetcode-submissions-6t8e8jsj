class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */


    findMin(nums) {
        let n = nums.length   - 1 ;
        let left = 0 ;
        let right = n;
        let res = nums[0];
        let mid = 0;
        while(left <= right ){
            if(nums[left] <= nums[right]){
                return Math.min(res, nums[left]);
            }
            let mid = Math.floor((left + right) / 2 );
            res = Math.min(res , nums[mid]);            
            if(nums[mid] >=  nums[left]){
                left = mid + 1 ;
            } else {
                right = mid - 1; 
            }

        }


       
        return res;

    }
}
