function solution(n, edge) {
    var answer = 0;
    const bfs = [1];
    const set = new Set();
    set.add(1);
    const nodeMap = new Map();
    for(let i = 0; i<edge.length; i++){
        const start = edge[i][0];
        const end = edge[i][1];
        if(nodeMap.has(start)){
            nodeMap.get(start).push(end);
        }
        else {
            nodeMap.set(start, [end]);
        }
        
        if(nodeMap.has(end)){
            nodeMap.get(end).push(start);
        }
        else {
            nodeMap.set(end, [start]);
        }
    }

    while(bfs.length > 0){
        const LEN = bfs.length;
        let count = 0;
        for(let i=0; i<LEN; i++){
            const node = bfs.shift();
            const arr = nodeMap.get(node);
            for(let j=0; j<arr.length; j++){
                const val = arr[j];
                if(set.has(val)) continue;
                set.add(val);
                bfs.push(val);
                count++;     
            }
        }
        if(count > 0){
            answer = count;
        }
        else {
            break;
        }
    }
    return answer;
}