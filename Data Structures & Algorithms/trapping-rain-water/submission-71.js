class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
      let n = height.length;
      let leftMax = 0;
      let rightMax = height[n - 1];
      let leftIndex = 0; 
      let rightIndex = n - 1; 
      let result = 0;
      let diff = 0;
      while(leftIndex <= rightIndex){
        if(leftMax < rightMax){
          diff = leftMax - height[leftIndex];
          if( diff > 0) result = result + diff;
          leftMax = Math.max(height[leftIndex], leftMax);
          leftIndex++;
          console.log(leftIndex, leftMax, );
        }else{ 
          diff = rightMax - height[rightIndex];
          if(diff > 0) result = result + diff;
          rightMax = Math.max(height[rightIndex], rightMax);
          rightIndex--;
        }
      }


      return result;
    }
}
