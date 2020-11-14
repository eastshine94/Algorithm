function solution(key, lock) {
    const N = lock.length;
    const M = key.length;
    const key2 = Array.from(Array(M), () => new Array(M).fill(0));
    const key3 = Array.from(Array(M), () => new Array(M).fill(0));
    const key4 = Array.from(Array(M), () => new Array(M).fill(0));
    const newLock = Array.from(Array(2 * M + N - 2), () => new Array(2 * M + N - 2).fill(0));
    
    for (let i = M - 1; i <= M + N - 2; i++) {
        for (let j = M - 1; j <= M + N - 2; j++) {
            newLock[i][j] = lock[i - M + 1][j - M + 1];
        }
    }

    // key rotation
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < M; j++) {
            key2[i][j] = key[M - 1 - j][i];
            key3[i][j] = key[j][M - 1 - i];
            key4[i][j] = key[M - 1 - i][M - 1 - j];
        }
    }

    // 키 맞춰보기
    for(let i=0; i < newLock.length; i++){
        for(let j=0; j < newLock.length; j++){
            for(let n = 0; n<4; n++){
                let flag = false;
                for (let k = M - 1; k <= M + N - 2; k++) {
                    for (let h = M - 1; h <= M + N - 2; h++) {
                        const y = k - i;
                        const x = h - j;
                        let val = 0;
                        if(y >= 0 && x >= 0 && y < M && x < M){
                            if(n === 0) val = key[y][x];
                            else if(n === 1) val = key2[y][x];
                            else if(n === 2) val = key3[y][x];
                            else val = key4[y][x];
                        }

                        const cal = val + newLock[k][h];
                        if(cal === 0 || cal === 2) {
                            flag = true;
                            break;
                        }
                    }
                    if(flag) break;
                }
                if(!flag) return true;
            }
            
        }
    }

    return false;
}