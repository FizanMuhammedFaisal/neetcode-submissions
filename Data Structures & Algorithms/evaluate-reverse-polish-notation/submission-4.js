class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        const arr=[]
let sum=0
        for(const o of tokens){

            if(!isNaN(Number(o))){
                arr.push(Number(o))
                 console.log(o+'p')
            }else{
                console.log(arr)
                console.log(o)
                if(o==='+'){
                      sum = arr[arr.length-2]+arr[arr.length-1]
                      arr.pop()
                      arr.pop()
                      arr.push(sum)
                }else if(o==='-'){
                    sum =arr[arr.length-2]-arr[arr.length-1]
                     arr.pop()
                      arr.pop()
                      arr.push(sum)

                }else if(o==='*'){
                    sum =arr[arr.length-2]* arr[arr.length-1]
                     arr.pop()
                      arr.pop()
                      arr.push(sum)

                }else{
                    sum =Math.trunc(arr[arr.length-2]/arr[arr.length-1])
                     arr.pop()
                      arr.pop()
                      arr.push(sum)

                }
            }
        }
          return sum===0 ? arr[0]:sum 
    }
  
}
