/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim();
    const e_split = s.split('e');
    if(e_split.length > 2) return false;
    if(e_split.length == 2){
        if(!dot_match(e_split[0])) return false;
        if(!e_split[1].match(/^[+-]?[0-9]+$/)) return false;
        return true;
    }
    return dot_match(s);
};

const dot_match = (s) => {
    const dot_split = s.split('\.');
    if(dot_split.length > 2) return false;
    if(dot_split.length == 2){
        if(dot_split[1].match(/^[0-9]+$/)) {
            if(dot_split[0].match(/^[+-]?[0-9]*$/)) return true;
            return false
        }

        else if(dot_split[1]===''){
            if(dot_split[0].match(/^[+-]?[0-9]+$/)) return true;
            return false;
        }
    }
    return s.match(/^[+-]?[0-9]+$/) ? true : false;
}