class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let setR = new Set();
        let setC = new Set();
        let mapRect = new Map();
   
        
        for(let i = 0 ; i <= 8; i++){
            setR.clear();
            setC.clear();
            for( let j = 0 ; j <= 8 ; j++){
                let rowValue = board[i][j];
                let columValue = board[j][i];

                if(rowValue !== '.'){
                    if( setR.has(rowValue) ){
                        return false;
                    } else {
                        setR.add(rowValue);
                    }
                }


                if(columValue !== '.'){
                    if( setC.has(columValue) ){
                        return false;
                    } else {
                        setC.add(columValue);
                    }
                }

                let k = Math.floor((i / 3)) * 3 + Math.floor(j / 3);

                if(rowValue !== '.'){
                    if(!mapRect.has(k)){
                        mapRect.set(k, new Set([rowValue]))
                    }else{
                        if(mapRect.get(k).has(rowValue)){
                            return false;
                        }else{
                            mapRect.get(k).add(rowValue);
                        }
                    }
                }



            }
        }

        return true;

    }
}
