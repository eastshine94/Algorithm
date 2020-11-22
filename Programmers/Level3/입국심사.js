function solution(n, times) {
    times.sort((a, b) => a - b);
    const LEN = times.length;
    
    let low = 0;
    let high = times[LEN - 1] * n;
    let mid = Math.floor((low + high) / 2);
    let count = 0;

    while (low <= high) {        
        for (let time of times) {
            count += Math.floor(mid / time);
        }

        if (count >= n) {
            high = mid - 1;
        }
        else if (count < n) {
            low = mid + 1;
        }
        count = 0;
        mid = Math.floor((low + high) / 2);
    }
    return low;
  
}