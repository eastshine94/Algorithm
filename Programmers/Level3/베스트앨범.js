function solution(genres, plays) {
    const answer = [];
    const map = new Map();
    genres.forEach((val, idx)=>{
        const play = plays[idx];
        if(map.has(val)){
            const json = map.get(val);
            json.playArr.push([idx, play]);
            json.totalPlay += play; 
        }
        else{
            map.set(val, {
                "playArr" : [[idx, play]],
                "totalPlay": play
            });
        }
    });
    const arr = [...map.values()];
    arr.sort((a,b) => b.totalPlay - a.totalPlay);
    arr.forEach((val, idx) => {
        const playArr = val.playArr;
        playArr.sort((a,b) => b[1] - a[1]);
        for(let i = 0; i<2; i++){
            if(playArr.length === 0) break;
            const remove = playArr.shift();
            answer.push(remove[0]);
        }
    });
    return answer;
}