/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let answer = 0;
    if(matrix.length === 0 || matrix[0].length === 0){
        return 0;
    }
    
    const heights = Array.from(Array(matrix.length),() => new Array(matrix[0].length + 1).fill(0));
    for(let i = 0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            const val = parseInt(matrix[i][j]);
            if(i === 0){
                heights[i][j] = val;
            }
            else {
                heights[i][j] = val ===1 ?  val + heights[i-1][j] : 0;
            }
        }
    }
    
    for(let i = 0; i<matrix.length; i++){
        let stack = [];
        const his = heights[i];
        his.forEach((height, idx) => {
            while(stack.length > 0 && height < his[stack[0]]){
                const h = his[stack.shift()];
                const w = stack.length ? (idx - stack[0] - 1) : idx;
                answer = Math.max(answer, h * w);
            }
            stack.unshift(idx);
        });
    }


    return answer;
};