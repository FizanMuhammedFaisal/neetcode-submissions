class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

       const stack=[]
      const res=new Array(temperatures.length).fill(0)
       for(let i=0;i<temperatures.length;i++){

        if(stack[stack.length -1] ===undefined ||temperatures[stack[stack.length-1]] >= temperatures[i]){
            stack.push(i)
        }else{
            while(stack.length > 0 && temperatures[stack[stack.length-1]] < temperatures[i]){
                const val=stack.pop()
                res[val]= i-val
            }
            stack.push(i)
        }

       }
       return res
    }
}