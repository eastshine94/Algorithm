/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(!s.match(p)){
        return false;
    }
    return s.match(p).find(val=> val === s) === s ? true:false;
};
