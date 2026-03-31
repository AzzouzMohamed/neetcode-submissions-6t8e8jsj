class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
      let leftMax = 0;
      let rightMax = 0;
      let result = 0;
      for(let i = 0; i <= height.length - 1 ; i++ ){
        leftMax = height[i];
        rightMax = height[i];

        for(let j = 0 ; j < i ; j++){
          leftMax = Math.max(leftMax, height[j]);
        }

        for(let k = i+1 ; k <= height.length - 1 ; k++ ){
          rightMax = Math.max(rightMax, height[k]);
        }

        result = result + Math.min(rightMax, leftMax) - height[i];
      } 

      return result;
    }
}
