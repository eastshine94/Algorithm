/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let answer;
var permuteUnique = function(nums) {
    answer = [];
    nums = nums.sort((a,b) => a-b);
    let map = {};
    let set = new Set();
    for(let num of nums){
        map[num]? map[num]++ : map[num] = 1;
        set.add(num);
    }
    let keys = [...set.keys()];
    getAnswer(map, keys, [], nums.length);
    return answer;
};

const getAnswer = (map, keys, list, len) => {
    if(list.length === len) {
        answer.push([...list]);
        return;
    }
    for(let i= 0; i<keys.length; i++){
        let key = keys[i];
        let val = map[key];
        if(val > 0){
            map[key]--;
            list.push(key);
            getAnswer(map, keys, list, len);
            list.pop();
            map[key]++;
        }
    }
}