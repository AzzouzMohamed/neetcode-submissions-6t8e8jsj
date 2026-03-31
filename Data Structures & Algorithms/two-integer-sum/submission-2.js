class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mp = new Map([[nums[0] , 0]]);

        for(let i = 1 ; i <= nums.length -1 ; i++){
            if(mp.has(target - nums[i]) ){
                return [i , mp.get(target - nums[i]) ];
            }else{
                mp.set(nums[i], i );
            };
        }
    }
}
