class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i = 0; i <= tokens.length  - 1 ; i++){
            if( !isNaN(tokens[i])){
                stack.push(tokens[i]);
            }else{
                let n1 = stack.pop();
                let n2 = stack.pop();
                let result = eval(`${n2} ${tokens[i]} ${n1}`);
                if(tokens[i] === "/"){
                    result = Math.trunc(result);
                }
                stack.push(result);
            }  
        }

        return stack.pop();
    }
}
