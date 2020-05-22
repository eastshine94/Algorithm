/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let map = getMap();
    let answer = values.reverse().reduce((acc, val) => {
        if (num >= val) {
            let n = Math.floor(num / val);
            num = num % val;
            return acc + map.get(val).repeat(n);
        }
        return acc;
    }, "");
    return answer;
};
const getMap = () => {
    let map = new Map();
    map.set(1, "I");
    map.set(4, "IV");
    map.set(5, "V");
    map.set(9, "IX");
    map.set(10, "X");
    map.set(40, "XL");
    map.set(50, "L");
    map.set(90, "XC");
    map.set(100, "C");
    map.set(400, "CD");
    map.set(500, "D");
    map.set(900, "CM");
    map.set(1000, "M");
    return map;
};
