/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let rowS = 0;
    let rowE = n - 1;
    let colS = 0;
    let colE = n - 1;
    let i;

    const answer = [];
    let val = 1;
    while (rowS <= rowE && colS <= colE) {
        for (i = colS; i <= colE; i++) {
            if (!answer[rowS]) answer[rowS] = [];
            answer[rowS][i] = val++;
        }
        for (i = rowS + 1; i <= rowE; i++) {
            if (!answer[i]) answer[i] = [];
            answer[i][colE] = val++;
        }
        for (i = colE - 1; i >= colS; i--) {
            if (rowS === rowE) break;
            answer[rowE][i] = val++;

        }

        for (i = rowE - 1; i > rowS; i--) {
            if (colS === colE) break;
            answer[i][colS] = val++;
        }
        rowS++;
        rowE--;
        colS++;
        colE--;

    }



    return answer;
};