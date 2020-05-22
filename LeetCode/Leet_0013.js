/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = getMap();
    const keys = [...map.keys()].reverse();
    let answer = 0;
    let idx = 0;
    while(idx < keys.length){
        const key = keys[idx];
        const isMatch = s.match(`^${key}`);
        if(isMatch === null){
            idx++;
        }
        else{
            answer += map.get(key);
            s = s.substring(key.length);
        }
    }
    return answer;
};
const getMap = () => {
    let map = new Map();
    map.set("I", 1);
    map.set("IV", 4);
    map.set("V", 5);
    map.set("IX", 9);
    map.set("X",10);
    map.set("XL",40);
    map.set("L",50);
    map.set("XC",90);
    map.set("C",100);
    map.set("CD",400);
    map.set("D",500);
    map.set("CM",900);
    map.set("M",1000);
    return map;
};
