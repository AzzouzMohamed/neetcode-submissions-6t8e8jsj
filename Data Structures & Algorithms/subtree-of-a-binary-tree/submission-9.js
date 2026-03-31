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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    sameTree(root, subRoot){
        if(!root && !subRoot) return true;

        if(root && subRoot && root.val === subRoot.val){
            return this.sameTree(root.left, subRoot.left) && this.sameTree(root.right, subRoot.right)
        }else {
            return false;
        }

    }
    isSubtree(root, subRoot) {
        if(this.sameTree(root, subRoot)){
            return true;
        }

        let b = false;
        if(root.left ){
            b = b || this.isSubtree(root.left , subRoot)
        }

        if(root.right){
            b = b ||  this.isSubtree(root.right , subRoot)
        }

        return b;
    
    }
}

    
