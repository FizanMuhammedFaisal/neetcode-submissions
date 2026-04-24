class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let set= new Map()
        for(let i=0;i<nums.length;i++){
          const num= target - nums[i]
          if(set.has(num)){
            return [i,set.get(num)]
          }else{
            set.set(nums[i],i)
          }
        }
        return []
    }
}
