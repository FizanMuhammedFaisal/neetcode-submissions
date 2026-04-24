class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l=0
        let r=height.length-1
        let maxl=height[l]
        let maxr=height[r]
        let max=0
        while(l<=r){
            if(maxl<maxr){
                const vol=(Math.min(maxl,maxr))-height[l]
                if(vol>0) max+=vol
                  maxl=Math.max(maxl,height[l])
                console.log(vol,maxl +"maaxleft",l+'left')
                l++
            }else{
               const vol=(Math.min(maxl,maxr))-height[r]
               if(vol>0) max+=vol
                maxr=Math.max(maxr,height[r])
              console.log(vol,maxr+"maaxright",r+'right')
                r--
            }

        }
        return max
    }
    
}
