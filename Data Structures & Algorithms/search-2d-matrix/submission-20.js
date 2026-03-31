class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let m = (matrix[0].length);
        let n =  matrix.length;
        let i = 0;
        let j = m - 1  ;
     


        while(i < n  && j >= 0 )
        {
            let corner = matrix[i][j];
            if(target === corner)
            {
                return true;
            }

            if(target < corner){
                j--;
            }

            if( target > corner){
                i++;
            }
        }

        return false;
    
    }
}
