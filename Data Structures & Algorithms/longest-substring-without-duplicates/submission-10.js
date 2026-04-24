class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let res=0
        let l=0
        let set=new Set()

        for(let i=0;i<s.length;i++){
            while(set.has(s[i])){
                set.delete(s[l])
                l++
            }
            set.add(s[i])
            res=Math.max(res,i-l+1)
        }
        return res
    }
}
