class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        const n=position.length
    //s=d/t
    //t=target-distancecovered/s

const stack=[]

    let pair = position.map((p, i) => [p, speed[i]]);
        pair.sort((a, b) => b[0] - a[0]);

    for(let i=0;i<n;i++){
        stack.push((target-pair[i][0])/pair[i][1])
        console.log(stack)
        if(stack.length>=2&& stack[stack.length-2]>=stack[stack.length-1]){
            stack.pop()
        }
    }
    return stack.length

    }
}
