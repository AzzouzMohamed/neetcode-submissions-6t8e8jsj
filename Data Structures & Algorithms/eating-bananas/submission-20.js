class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */ 
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles);

        let start = 0 ; 
        let end = max; 
        let saveLastTime = 0;
        let index = 0;
        let k = 0;
        if( h <= piles.length ) return max; 


        while(start <= end){
            console.log(start , end);
            k = Math.floor( (start + end) / 2);

            let totalTime = 0;
            for( let i = 0 ; i < piles.length ; i++ ){
                totalTime+= Math.ceil(piles[i] / k );
            }
            console.log(k, totalTime)

                if(totalTime <= h){
                    end = k - 1;

                    
                    index = k;
                    
                }

                if(totalTime > h ){
                    start = k + 1; 
                }
            
        

        }

        return index;
        
    }
}

        


