class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        //a=w*h
        //w=n-i
        //height=Math.min(1,2)
    let max=0
    let l=0
    let r=heights.length-1
        while(l<r){
            const w=r-l
            const h=Math.min(heights[l],heights[r])
            const a=w*h
            if(a>max){
                max=a
            }

            if(heights[l]>heights[r]){
                r--
            }else{
                l++
            }
        }
         return max
    }
   
}
