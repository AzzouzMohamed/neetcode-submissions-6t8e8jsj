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
     * @return {number}
     */

    static res = 0;

    dfs(root){
        if(!root) return 0;
        let left = this.dfs(root.left);
        let right = this.dfs(root.right);
        Solution.res = Math.max( Solution.res, left + right );

        return 1 +  Math.max(left, right);
    }


    diameterOfBinaryTree(root) {
        Solution.res = 0;
        this.dfs(root);

        return Solution.res;
    }
}
