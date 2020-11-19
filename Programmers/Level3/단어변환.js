function solution(begin, target, words) {
    var answer = 0;
    const bfs = [begin];
    const check = new Array(words.length).fill(false);
    if(!words.includes(target)) return 0;

    while(bfs.length > 0){
        answer++;
        const LEN = bfs.length;
        for(let i = 0; i<LEN; i++){
            const word = bfs.shift();
            for(let j = 0; j<words.length; j++){
                if(check[j]) continue;
                let count = 0;
                const compare = words[j];
                for(let k=0; k< word.length; k++){
                    const c1 = word.charAt(k);
                    const c2 = compare.charAt(k);
                    if(c1 !== c2) count++;
                    if(count >= 2) break;
                }
                if(count === 1){
                    check[j] = true;
                    bfs.push(compare);
                    if(compare === target) return answer;
                }
            }
        }
    }
    return 0;
}