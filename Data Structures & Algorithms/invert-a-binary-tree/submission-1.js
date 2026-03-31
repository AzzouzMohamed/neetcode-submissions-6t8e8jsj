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
     * @return {TreeNode}
     */
    invTree(root){
        if(root === null) return;

        let sub = root.left;
        root.left = root.right;
        root.right = sub;

        this.invTree(root.left);
        this.invTree(root.right);


    }


    invertTree(root) {

        this.invTree(root)
        return root
    }
}
