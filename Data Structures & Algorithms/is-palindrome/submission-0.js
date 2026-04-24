class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
 let string=s.toLowerCase().split(' ').join('')
 let l=0
 let r=string.length-1
 console.log(string)

 while(l<r){

    while(l<r && !this.alphaNum(string[l])){
        l++
    }
    while(l<r && !this.alphaNum(string[r])){
        r--
    }
    if(string[l]!==string[r]){
        return false
    }
    l++
    r--

 }
     return true
    }
 alphaNum(c) {
        return (c >= 'A' && c <= 'Z' || 
                c >= 'a' && c <= 'z' || 
                c >= '0' && c <= '9');
    }
}
