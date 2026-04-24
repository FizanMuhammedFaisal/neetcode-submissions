class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

let l=0
let r=1
const arr=[]
for(let i=0;i<numbers.length-1;i++){
  for(let j=0;j<numbers.length;j++){
      if(numbers[l]+numbers[r]===target){
        arr.push(l+1,r+1)
    }
    r++
  }
  l++
  r=l+1
}
return arr
    }
}
