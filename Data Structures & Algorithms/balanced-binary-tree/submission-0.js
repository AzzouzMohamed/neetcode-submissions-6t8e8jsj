/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */

    dfs(root){
        if(!root) return [ 0, true ];

        let [ h1 , bol1 ] = this.dfs(root.right);
        let [ h2 , bol2 ]  = this.dfs(root.left);

        let balanced = bol1 && bol2 && Math.abs(h1 - h2 ) <= 1 ;

        return [ 1 + Math.max(h1,h2) , balanced];
        

    }

    
    isBalanced(root) {
        return this.dfs(root)[1]
    }
}
