/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openChars = {'(':')', '{':'}', '[':']'};
    const openArr = [];
    for(let i=0; i<s.length; i++){
        let c = s.charAt(i);
        if(openChars[c]) openArr.push(c);
        else{
            let right = openChars[openArr.pop()];
            if(c !== right) return false;
        }
    }

    return openArr.length === 0 ? true : false;
};