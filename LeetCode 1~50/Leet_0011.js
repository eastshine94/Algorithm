/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let i=0;
    let j=height.length -1;

    while(i<j){
        let h1 = height[i];
        let h2 = height[j];
        let currArea = Math.min(h1,h2)*(j-i);
        maxArea = Math.max(maxArea, currArea);
        if(h1 <= h2){
            i++;
        }
        else {
            j--;
        }
    }


    return maxArea;
    
};