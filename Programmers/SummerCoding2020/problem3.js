function solution(total_sp, skills) {
    var answer = [];
    let nodes = {};
    let set = new Set();
    let values = {};
    skills.forEach(val => {
        let parent = val[0];
        let child = val[1];
        set.add(parent);
        set.add(child);
        if(nodes[parent]){
            nodes[parent].push(child);
        }
        else{
            nodes[parent] = [];
            nodes[parent].push(child);
        }
    });
    let sum = 0;
    set.forEach(val => {
        values[val] = getSP(nodes, values, val);
        sum +=values[val]; 
    });
    let sp = Math.floor(total_sp/sum);
    let keys = [...set.keys()].sort((a,b) => a-b);
    answer = keys.map(key => {
        return values[key] * sp;
    });
    return answer;
}
function getSP(nodes, values, key) {
    if(!nodes[key]){
        return 1;
    }
    let linkedNodes = nodes[key];
    let sum = 0;
    linkedNodes.forEach(val => {
        sum += getSP(nodes, values, val);
    });
    return sum;
}