class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        const rows=matrix.length
        const cols=matrix[0].length
console.log(rows)
console.log(cols)
        let top=0
        let bot=rows -1

        while(top<=bot){
            const mid=Math.floor((top+bot)/2)
        console.log(mid)
            if(target > matrix[mid][cols-1]){

                top=mid+1
            }else if(target < matrix[mid][0]){
                bot=mid-1
            }else{
                break
            }
        }

        if(!(top<=bot)){
            return false
        }

        const tara=Math.floor((top+bot)/2)
        const tar=matrix[tara]
        console.log(tar)

        let l=0
        let r=cols -1
        while(l<=r){
            const mid=Math.floor((l+r)/2)
            console.log(mid)
            if(target >tar[mid]){
                l= mid + 1
            }else if(target < tar[mid]){
                r= mid - 1
            }else{
                return true
            }
        }
        return false

    }
}
