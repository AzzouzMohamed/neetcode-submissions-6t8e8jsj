class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    bst(array , target){
        let start = 0 ; 
        let end = array.length - 1 ;

        while( start <= end ){
            let mid = Math.floor( (start + end) / 2  );
            
            if( target === array[mid]){
                return true;
            }
            if( target > array[mid]){
                start = mid + 1; 
            }
            if( target < array[mid]){
                end = mid - 1 
            }
            
        }

        return false;
    }

    searchMatrix(matrix, target) {
        for(let i = 0 ; i <= matrix.length - 1 ; i++)
        {
            let lastElt = matrix[i][(matrix[i].length) - 1];
            if(target <= lastElt ){
                return this.bst(matrix[i] , target);
            }
        }

        return false;

    }
}
