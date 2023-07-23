/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a,b) => a - b);
    const len = arr.length / 2;
    if (!Number.isInteger(len)) {
        const round = Math.round(len);
        return arr[round-1];
    } else {
        return (arr[len] + arr[len-1])/2;
    }
};
