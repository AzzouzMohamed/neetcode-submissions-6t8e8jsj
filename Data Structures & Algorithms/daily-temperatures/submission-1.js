class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [ [temperatures[0],0 ] ];
        let result = new Array(temperatures.length).fill(0);
        for(let i = 1 ; i <= temperatures.length - 1 ; i++){
            console.log(temperatures[i]);
            console.log("stack avant", stack);
            if(stack.length > 0){
                while (stack.length > 0 && stack[stack.length - 1 ][0] < temperatures[i]){
                    let  [value, index] = stack.pop();
                    result[index] = i - index ;
                }
            } 

            stack.push( [ temperatures[i], i ] );

            console.log("stack apres,", stack);
           
        }

        return result;
    }
}
