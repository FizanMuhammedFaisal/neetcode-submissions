class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res={}
        const arr=[]
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                for(let k=j+1;k<nums.length;k++){
                    if(nums[i]+nums[j]+nums[k]===0){
                        const a=([nums[i],nums[j],nums[k]].sort((a,b)=>a-b))
                     if(!res[a]){
                        res[a]=1
                        arr.push(a)
                     }
                    }
                }
            }
        }

        return arr
    }
}
