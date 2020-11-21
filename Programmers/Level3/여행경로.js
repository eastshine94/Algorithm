let answer;
function solution(tickets) {
    answer = ["ICN"];
    const map = new Map();
    const LEN = tickets.length;
    // make map
    for(let i=0; i<LEN; i++){
        const key = tickets[i][0];
        const dest = tickets[i][1];
        if(map.has(key)){
            map.set(key, [...map.get(key), dest].sort((a,b) => a.localeCompare(b)));
        }
        else {
            map.set(key, [dest]);
        }
    }

    findAnswer(map, "ICN", 0, LEN);
    return answer;
}

const findAnswer = (map, start, n, limit) => {
    if(n >= limit){
        return true;
    }

    if(!map.has(start)) return false;

    const arr = map.get(start);
    const copy = [...arr];
    if(arr.length === 0) return false;
    for(let i = 0; i < copy.length; i++){
        const dest = arr.splice(i, 1)[0];
        answer.push(dest);
        if(!findAnswer(map, dest, n+1, limit)){
            arr.push(dest);
            arr.sort((a,b) => a.localeCompare(b));
            answer.pop();
        }else {
            return true;
        }  
    }   
}