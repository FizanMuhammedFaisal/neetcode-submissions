class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map={}
        for(let i=0;i<nums.length;i++){
            map[nums[i]]=i
        }
        for(let i=0;i<nums.length;i++){
            const tof=target-nums[i]
            if(map[tof] !== undefined && map[tof] !== i){
                return [i,map[tof]]
            }
        }

    }
}
