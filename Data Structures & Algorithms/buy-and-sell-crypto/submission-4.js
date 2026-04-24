class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {


        let max=0
        let l=0
        let r=1

        for(let i=0;i<prices.length;i++){
            if(prices[l]>prices[r]){
                l=r
                r++
            }else if(prices[l]<=prices[r]){
                const prof=prices[r]-prices[l]
                if(prof>max){
                    max=prof
                }
                r++

            }
        }
        return max
    }
}
