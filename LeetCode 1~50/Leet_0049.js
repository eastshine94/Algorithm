/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for(let str of strs){
        let sortStr = str.split("").sort((a,b) => {
            return( a < b ) ? -1 : ( a == b ) ? 0 : 1;   
        }).join("");
        map.has(sortStr)? map.set(sortStr,[...map.get(sortStr), str]): map.set(sortStr,[str]);
    }
    return [...map.values()];
};