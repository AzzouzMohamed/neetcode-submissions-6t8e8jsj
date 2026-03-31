class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    
    twoSums(a, target, rst , i ){
        let start = i + 1;
        let end = a.length - 1 ;
        
        while(start < end){
            let s = a[start] + a[end];
            if(s === target){
                rst.push([a[start] , a[end], -target]);
                end--;
                start++;
                while(start < end && a[start] === a[start - 1]){
                    start++;
                }
            } else if(s < target){
               start++;
            } else {
                end--;
            }
        }


        return rst;
    }

    threeSum(nums) {

        nums.sort((a,b) => a - b);
        let rst = [];

        for( let i = 0 ; i <= nums.length - 1 ; i++ ){
            if(nums[i] > 0 ) break;
            if(i >  0 && nums[i] === nums[i - 1]) continue;
            rst = this.twoSums( nums , 0-nums[i], rst , i);
        }

        return rst;
    }
}
