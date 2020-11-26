function solution(jobs) {
    let currTime = 0;
    let totalProcessTime = 0;
    let idx = 0;
    const LEN = jobs.length;
    const workArr = [];
    jobs.sort((a,b) => {
        if(a[0] === b[0])
            return a[1] - b[1];
        return a[0] - b[0];
    });
    for(let i=0; i<LEN; i++){
        if(idx < LEN){
            for(let j=idx; j<LEN; j++){
                const start = jobs[j][0];
                const processTime = jobs[j][1];
    
                if(currTime >= start || workArr.length === 0) {
                    workArr.push([start, processTime]);
                    idx++;
                }
                else{
                    break;
                }       
            }
            workArr.sort((a,b) => a[1] - b[1]);
        }
        
        const remove = workArr.shift();
        const waitTime = currTime > remove[0] ? currTime - remove[0]: 0;
        currTime = currTime > remove[0]? currTime + remove[1] : remove[0] + remove[1];
        totalProcessTime +=  waitTime + remove[1];
    }

    return Math.floor(totalProcessTime/LEN);
}