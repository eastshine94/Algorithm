/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let arr = p.split("");
    let set = new Set();
    for(let i = arr.length-1; i>0; i--){
        let val1 = arr[i];
        let val2 = arr[i-1];
        if(val1 === "*" && val1 === val2){
            arr.splice(i,1);
        }
    }
    for(let i=0; i<s.length; i++){
        let c = s.charAt(i);
        set.add(c);
    }

    let key = [...set.keys()].join("");
    p = arr.join("");
    p = p.replace(/\?/gi, `[${key}]`);
    p = p.replace(/\*/gi, `([${key}])*`);
    return s.match(`^${p}$`) ? true : false;
};