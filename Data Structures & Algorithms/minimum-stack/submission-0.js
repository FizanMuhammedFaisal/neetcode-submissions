class MinStack {
    constructor() {
        this.min=[]
        this.stack=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length===0){
            this.min.push(val)
            this.stack.push(val)
        }else{
        if( this.min[this.min.length-1]>val){
        this.min.push(val)
       }else{
        this.min.push(this.min[this.min.length-1])
       }
       this.stack.push(val)
        }
      
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length===0) return null
        
        this.min.pop()

      return  this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        if(this.stack.length===0)return null
      return  this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
          if(this.stack.length===0)return null
    return this.min[this.min.length-1]
    }
}
