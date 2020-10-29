/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0);
    let max = 0;
    const stack = [];
    heights.forEach((height, i) => {
      while (stack.length && (heights[stack[0]] > height)) {
        const h = heights[stack.shift()];
        const w = stack.length ? (i - stack[0] - 1) : i;
        max = Math.max(max, h * w);
      }
      stack.unshift(i);
      
    })
    return max;
  };
  