function twoSum(arr, t) {
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; i<arr.length; j++) {
          if(arr[i] + arr[j] === t) {
        return [i, j];
        }
      }
    }
}

module.exports = twoSum;