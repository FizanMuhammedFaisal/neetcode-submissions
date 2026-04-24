class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let check={')':'(','}':'{',']':'['}
        let stack=[]

        for(const l of s){
            if(stack.length===0){
                stack.push(l)
            }else{
             if(check[l]===stack[stack.length-1]){
                stack.pop()
             }else{
                console.log(stack)
                if(check[l]){
                    if(stack[stack.length-1]!== check[l]){
                        return false
                    }
                }
                stack.push(l)
             }
            }
        }
        console.log(stack)
        return stack.length===0
    }
}
