/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let answer = [];
    let i;
    let idx = 0;
    let flag = true;
    for (i = 0; i < s.length; i++) {
        if (!answer[idx]) answer[idx] = [];
        answer[idx].push(s.charAt(i));
        if(flag) idx++;
        else idx--;
        if (idx === numRows-1) flag = false;
        else if(idx === 0 ) flag = true;
    }
    answer = answer.map(val => val.join(''));
    return answer.join('');
    
};