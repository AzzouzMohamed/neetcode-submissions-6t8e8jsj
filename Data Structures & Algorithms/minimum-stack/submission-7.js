class MinStack {
    constructor() {
        this.array = new Array();
        this.minValue = new Array();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let n = this.array.length - 1 ;
      
        if(n >= 0 ){
            let sameValue = this.minValue[n];
            if(val > sameValue ){
                this.minValue.push(sameValue);
            } else{
                this.minValue.push(val);
            }
        }else{
            this.minValue.push(val)
        }
      

        this.array.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.array.pop();
        this.minValue.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.array[this.array.length - 1 ];
    }

    /**
     * @return {number}
     */
    getMin() {
        let n = this.minValue.length;
        return this.minValue[n - 1];
    }
}
