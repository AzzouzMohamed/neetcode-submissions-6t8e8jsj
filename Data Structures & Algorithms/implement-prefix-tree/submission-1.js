class TreeNode {
    constructor(isThisTheEnd = false){
       this.children = new Map();
       this.isThisTheEnd = isThisTheEnd;
    }
}



class PrefixTree {
    constructor() {
        this.root = new TreeNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
     insert(word) {
        let pointer = this.root;
        for(let i = 0 ; i < word.length ; i++){
            if(!pointer.children.has(word[i])){
                pointer.children.set(word[i], new TreeNode(i === word.length - 1));
            } 

            pointer = pointer.children.get(word[i]);
        }

        pointer.isThisTheEnd = true;
    }


    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let pointer = this.root;

        for(let i = 0 ; i < word.length ; i++){
            if(!pointer.children.has(word[i])){
                return false;
            }
            pointer = pointer.children.get(word[i]);
        }

        return pointer.isThisTheEnd;    
     
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let pointer = this.root;

       for(let i = 0 ; i < prefix.length ; i++){
            if(!pointer.children.has(prefix[i])){
                return false;
            }
            pointer = pointer.children.get(prefix[i]);
        }

        return true; 
    }
}
