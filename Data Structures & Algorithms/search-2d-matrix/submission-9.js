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
        let start = 0;
        let end = matrix.length - 1 ;
        while(start <= end){
            let lastBigIndex = 0;
            let mid = Math.floor( (start + end) / 2 );
            let lastElt = matrix[mid][(matrix[mid].length) - 1];
            let firstElt =  matrix[mid][0];
            
          
            if( target > lastElt){
               start = mid + 1 ; 
            }
            if( target < lastElt ){
                if(target < firstElt){
                    end = mid - 1 ;
                } else {
                    return this.bst(matrix[mid], target);
                }

            } 
            if( target === lastElt){
                return true;
            }

        }
       
        return false;

    }
}
