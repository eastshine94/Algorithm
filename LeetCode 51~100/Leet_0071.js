/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const splitPath = path.split("/").filter(val => val !=='');
    const pathList = [];
    splitPath.forEach(val => {
        if(val === '..'){
            pathList.pop();
        }
        else if(val === '.'){
            continue;
        }
        else{
            pathList.push(val);
        }
    });
    let result = '/';
    for(let i=0; i<pathList.length; i++){
        result += i !== pathList.length-1 ? pathList[i]+'/':pathList[i];
    }
    return result;
};