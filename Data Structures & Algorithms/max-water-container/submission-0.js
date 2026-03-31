class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length - 1  ; 
        let max = 0;

        while(start < end){
            let min = Math.min(heights[start] ,heights[end]);
            max = Math.max( max , (min * (end - start )));

            if(  heights[start] < heights[end] ){
                start++;
            } else {
                end--;
            }
        } 

        return max;
    }

}
