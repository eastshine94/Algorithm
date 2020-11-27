function solution(n, works) {
    var answer = 0;
    const LEN = works.length;
    let copy = [...works];
    let remainWork = n;
    copy.sort((a,b)=> b - a);

    for(let i = 1; i<LEN; i++){
        if(copy[i-1] !== copy[i]){
            const minus = (copy[i-1] - copy[i])*i;
            if(remainWork > minus){
                remainWork -= minus;
            }
            else{
                let count = 1;
                while(remainWork > 0){
                    const m = count * i;
                    if(m >= remainWork){                        
                        remainWork -= (count-1)*i;
                        const work = remainWork* Math.pow(copy[i-1] - count,2);
                        const work2 = (i - remainWork)* Math.pow(copy[i-1] - count + 1,2);
                        const work3 = copy.slice(i).reduce((acc, curr) => {
                            return acc + Math.pow(curr,2);
                        }, 0);
                        answer = work + work2 + work3;
                        return answer;
                    }
                    count++;
                }
            }
        }
    }
    const val = copy[LEN-1];
    if(val*LEN <= remainWork) return 0;

    copy = new Array(LEN).fill(val);
    let count = 1;
    while(remainWork > 0){
        const m = count * LEN;
        if(m >= remainWork){                        
            remainWork -= (count-1)*LEN;
            const work = remainWork* Math.pow(copy[0] - count,2);
            const work2 = (LEN - remainWork)* Math.pow(copy[0] - count + 1,2);
            answer = work + work2;
            return answer;
        }
        count++;
    }


    return answer;
}