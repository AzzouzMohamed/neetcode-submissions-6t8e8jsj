class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map();

        for(let i = 0  ; i <= nums.length - 1 ;  i++){
            count.set( nums[i], ( count.get(nums[i]) | 0 ) + 1 );
        }


        let newFrqArray = [];
        for ( const [ num , freq ] of count ){
            if(!newFrqArray[freq]) newFrqArray[freq] = []
            newFrqArray[freq].push(num);
        }


        let res = [];
        let j = nums.length ;
        
        while(k > 0)
        {
            while(newFrqArray[j]?.length > 0 && j >  0 ){
                res.push(newFrqArray[j].pop());
                k--;
            }
            j = j - 1 ;
        } 

        return res;
 
        
        

    }
}
