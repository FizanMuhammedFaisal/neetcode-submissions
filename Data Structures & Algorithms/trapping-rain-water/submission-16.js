class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let watersq=0
       let  l=0
       let  r=height.length-1
        let maxl=height[l]
        let maxr=height[r]
        while(l<r){
        if(maxl<maxr){
              l++
          let c= maxl-height[l]
          c >0 ? watersq+=c:''
          if(height[l]>maxl){
            maxl=height[l]
          }

        }else{
         r--
            let c=maxr-height[r]
            c>0? watersq+=c:''
               
            if(height[r]>maxr){
                maxr=height[r]
            }
        }

        console.log(watersq)
        console.log(l,r)
        console.log(maxl,maxr+'m')
        }
        console.log(watersq)
        return watersq
    }
   
}
