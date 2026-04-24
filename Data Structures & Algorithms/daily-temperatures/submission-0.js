class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const res=[]

        for(let i=0;i<temperatures.length;i++){
            let j=1
            let k=i
            while(k<=temperatures.length){
                if(temperatures[i+j] > temperatures[i]){
                    res.push(j)
                    break
                }
                j++
                k++
            }
            if(res.length -1!==i){
                res.push(0)
            }
        }

        return res
    }
}
