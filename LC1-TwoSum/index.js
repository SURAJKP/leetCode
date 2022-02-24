function twoSum(arr, t) {
    // for(let i=0; i<arr.length; i++) {
    //     for(let j=i+1; i<arr.length; j++) {
    //       if(arr[i] + arr[j] === t) {
    //     return [i, j];
    //     }
    //   }
    // } time complexity O(n^2)
    const numVisited = {}; // {2:0, 7:1}
    const res = [];
    for(let i=0; i<arr.length; i++) {
        const num = arr[i];
        const complement = t-num;
        if(numVisited[complement] !== undefined) {
            res.push(i);
            res.push(numVisited[complement])
        }
        numVisited[num] = i;
    }
    return res; //time complexity O(n)
} 

module.exports = twoSum;