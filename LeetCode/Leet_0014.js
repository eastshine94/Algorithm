/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if(strs.length === 1){
        return strs[0];
    }
    else if(strs.length === 0){
        return "";
    }

    let i;
    let commonPrefix = getCommonPrefix(strs[0], strs[1]);
    for(i=2; i<strs.length; i++){
        commonPrefix = getCommonPrefix(commonPrefix, strs[i]);
    }
    return commonPrefix;
};
const getCommonPrefix = (str1, str2) => {
    const len = Math.min(str1.length, str2.length);
    let i;

    let commonPrefix = "";
    for(i = 0; i<len; i++){
        let c1 = str1.charAt(i);
        let c2 = str2.charAt(i);
        if(c1!==c2) break;
        commonPrefix += c1; 
    }
    return commonPrefix;
}
