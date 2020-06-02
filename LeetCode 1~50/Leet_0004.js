/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var sumArr = nums1.concat(nums2);
    sumArr = sumArr.sort((a,b) => a-b);
    var len = sumArr.length; 
    if(len%2 === 0){
        const idx = len/2;
        return (sumArr[idx-1]+sumArr[idx])/2;
    }
    else{
        const idx = Math.floor(len/2);
        return sumArr[idx];
    }
};