function solution(n, costs) {
    let answer = 0;
    const costMap = Array.from(Array(n), () => new Array(n).fill(999999999));
    const minCost = Array.from(Array(n-1), () => new Array(n).fill(999999999));
    const nodeSet = new Set();
    nodeSet.add(0);
    for(let c of costs){
        const node1 = c[0];
        const node2 = c[1];
        const cost = c[2];
        costMap[node1][node2] = cost;
        costMap[node2][node1] = cost;
    }
    let count = 0;
    let selectedNode = 0;
    while(count < n - 1){
        let idx;
        let min = 999999999;
        if(count === 0){
            for(let i = 1; i<n; i++){
                const val = costMap[0][i];
                minCost[0][i] = val;
                if(min > val){
                    min = val;
                    idx = i;
                }
            } 
        }
        else {
            for(let i = 1; i<n; i++){
                if(nodeSet.has(i)) continue;
                const prevVal = minCost[count-1][i];
                const currVal = costMap[selectedNode][i];
                const minVal = Math.min(prevVal, currVal);
                minCost[count][i] = minVal;
                if(min > minVal){
                    min = minVal;
                    idx = i;
                }
            } 
        }
        nodeSet.add(idx);
        selectedNode = idx;
        count++;
        answer += min;
    }
    return answer;
}