class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {


      let ml= 0;
      let mr = 0;
      let maxLeft = [];
      let maxRight = new Array(height.length);


      for(let i = 0; i <= height.length - 1; i++){
        ml = Math.max(height[i], ml);
        maxLeft.push(ml);
      }

      for(let j = height.length - 1 ; j >= 0 ; j--){
        mr = Math.max(height[j], mr);
        maxRight[j] = mr;
      } 

      console.log(maxLeft);
      console.log(maxRight)

      let result  = 0;
      for(let i = 0; i <= height.length - 1 ; i++){
        result = result + (Math.min(maxLeft[i], maxRight[i]) - height[i]);
      }

      return result;
    }
}
