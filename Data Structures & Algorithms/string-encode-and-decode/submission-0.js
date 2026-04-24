class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
let res=''
        for(const s of strs){
            res +=String(s.length)+'#'+s

        }
return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
let res=[]
let i=0

while(i < str.length ){
   let j=i
    while (str[j] !=='#'){
        j++
    }
    let length=parseInt(str.substring(i,j))
    i=j+1
    j= i+length
    let word=str.substring(i,j)
    res.push(word)
    i=j
}
console.log(res)
return res
    }
}
