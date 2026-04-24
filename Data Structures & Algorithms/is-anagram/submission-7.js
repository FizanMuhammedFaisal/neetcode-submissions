class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length){
            return false
        }

        let right={}
        let left={}
        for(let i=0;i<s.length;i++){
            right[s[i]] =( right[s[i]]||0)+1
            left[t[i]] =( left[t[i]]||0)+1
        }
    for(const keys in right){
        if(right[keys]!== left[keys]){
            return false
        }
    }
    return true
}}
