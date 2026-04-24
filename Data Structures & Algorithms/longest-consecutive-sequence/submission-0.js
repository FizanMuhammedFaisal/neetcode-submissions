class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

    const set=new Set(nums)
let longest=0
    for (const num of set){
        let j=1
        if(!set.has(num-1)){

            while(set.has(num+j)){
                j++
            }
            longest=Math.max(longest,j)
        }
    }
    return longest
    }
}
