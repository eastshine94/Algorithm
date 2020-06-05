/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    
    let rowS = 0;
    let rowE = matrix.length-1;
    let colS = 0;
    let colE = matrix[0] ? matrix[0].length -1 : -1;
    let i,val;
    
    const answer = [];
    while(rowS<=rowE && colS<=colE){
        for(i=colS; i<=colE; i++){
            val = matrix[rowS][i];
            answer.push(val);
        }
        for(i=rowS+1; i<=rowE; i++){
            val = matrix[i][colE];
            answer.push(val);
        }
        for(i=colE-1; i>=colS; i--){
            if(rowS === rowE) break;
            val = matrix[rowE][i];
            answer.push(val);
        }
    
        for(i=rowE-1; i>rowS; i--){
            if(colS === colE) break;
            val = matrix[i][colS];
            answer.push(val);
        }
        rowS++;
        rowE--;
        colS++;
        colE--;

    }
    

    
    return answer;
};