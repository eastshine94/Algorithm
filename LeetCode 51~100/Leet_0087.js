/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var isScramble = function(s1, s2) {
    if(!isCovered(s1,s2)) return false;
    if(s1.length === 1) return true;
    for(let i= 1; i<s1.length; i++){
        const split1 = s1.substring(0,i);
        const split2 = s1.substring(i);
        const s2Split1 = s2.substring(0,i);
        const s2Split2 = s2.substring(i);

        if(isScramble(split1, s2Split1) && isScramble(split2, s2Split2)) return true;
        
        const s2Split3 = s2.substring(s2.length - i);
        const s2Split4 = s2.substring(0, s2.length - i);
        if(isScramble(split1, s2Split3) && isScramble(split2, s2Split4)) return true;
    }
    return false;
};

const isCovered = (s1, s2) => {
    const arr1 = s1.split("").sort((a,b)=> a.localeCompare(b));
    const arr2 = s2.split("").sort((a,b)=> a.localeCompare(b));
    const arr1Str = arr1.toString();
    const arr2Str = arr2.toString(); 
    return arr1Str === arr2Str;
}