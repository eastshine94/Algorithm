/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a,b) => a[0] - b[0]);
    for(let i=0; i<intervals.length-1; i++){
        while(i+1<intervals.length){
            let val1 = intervals[i];
            let val2 = intervals[i+1];
            if(val1[1] >= val2[0]){
                intervals[i] = [intervals[i][0],Math.max(intervals[i][1],intervals[i+1][1])];
                intervals.splice(i+1,1); 
            }
            else{
                break;
            }
        }
    }
    return intervals;
};