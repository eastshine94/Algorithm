function solution(n) {
    var answer = [];
    hanoi(answer, 1, 3, 2, n);
    return answer;
}

const hanoi = (arr, from, to, center, n) => {
    if(n === 1){
        arr.push([from, to]);
        return;
    } 
    hanoi(arr, from, center, to, n-1);
    arr.push([from, to]);
    hanoi(arr, center, to, from, n-1);
}