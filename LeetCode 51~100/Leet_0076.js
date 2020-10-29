/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let answer = '';
    let flag = true;
    let min = 9999999999;
    const tMap = new Map();
    const sMap = new Map();
    let p = 0, q = 0;    
    for(let i=0; i<t.length; i++){
        const c = t.charAt(i);
        if(tMap.has(c)){
            tMap.set(c, tMap.get(c) + 1);
        }
        else {
            tMap.set(c, 1);
        }
    }
    while(true){
        if(flag) {
            if(p >= s.length ){
                break;
            }
            for(let i = p; i<s.length;i++){
                const c = s.charAt(i);
                if(tMap.has(c)){
                    if(sMap.has(c)){
                        sMap.set(c, sMap.get(c) + 1);
                    }
                    else {
                        sMap.set(c, 1);
                    }
                    if(getIsCover(tMap, sMap)){
                        flag = false;
                        p++;
                        if(p-q < min){
                            min = p-q;
                            answer = s.substring(q,p);
                        }
                        break;
                    }
                }
                p++;
            }
            
        }   
        else {
            for(let i = q; i<p; i++){
                const c = s.charAt(i);
                if(tMap.has(c)){
                    sMap.set(c, sMap.get(c) - 1);
                    if(!getIsCover(tMap, sMap)){
                        sMap.set(c, sMap.get(c) + 1);
                        if(p-q < min){
                            min = p-q;
                            answer = s.substring(q,p);
                        }
                        break;
                    }
                }
                q++;
            }
            flag = true;
        } 
    }
    return answer;
};

const getIsCover = (tMap, sMap) => {
    for(key of tMap.keys()){
        if(sMap.has(key)){
            if(sMap.get(key) < tMap.get(key)){
                return false;
            }
        }
        else{
            return false;
        }
    }
    return true;
}

