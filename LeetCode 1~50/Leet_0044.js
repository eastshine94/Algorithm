/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const sLen = s.length;
    const pLen = p.length;
    let sIdx = 0, pIdx =0, starIdx= -1, matchIdx = -1;
    
    while(sIdx<sLen){
        let sChar = s.charAt(sIdx);
        let pChar = p.charAt(pIdx);
        if(sChar === pChar || pChar==="?"){
            sIdx++;
            pIdx++;
            if(pIdx === pLen && sIdx === sLen) return true;
        }
        else if(pChar === "*"){
            starIdx = pIdx;
            matchIdx = sIdx;
            pIdx++;
            if(!p.charAt(pIdx)) return true;
        }
        else if(starIdx !== -1){
            pIdx = starIdx + 1;
            matchIdx++;
            sIdx = matchIdx;
        }
        else return false;
    }

    while(pIdx < pLen && p[pIdx] === '*'){
        pIdx++;
    }
    return pIdx === pLen;
 
};