/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const answer = [];
    if(words.length === 1) {
        return [words[0] + " ".repeat(maxWidth - words[0].length)]
    }
    let result = words[0];
    for(let i = 1; i<words.length; i++){
        word = words[i];
        if(i === words.length - 1){
            if( result.length + word.length + 1 <= maxWidth){
                result += " " + word;
                answer.push(result + " ".repeat(maxWidth - result.length));          
            }
            else{
                answer.push(spaceEvenly(result, maxWidth));
                answer.push(word + " ".repeat(maxWidth - word.length))
            }
        }
        else if( result.length + word.length + 1 <= maxWidth){
            result += " " + word;
        }
        else{
            answer.push(spaceEvenly(result, maxWidth));
            result = word;
        }
        
    }
    return answer;
};

const spaceEvenly = (s, maxWidth) => {
    const spaceSplit = s.split(" ");
    const spaceSplitLen = spaceSplit.length;
    if(spaceSplitLen === 1){
        return s + " ".repeat(maxWidth - s.length);
    }
    else{
        const spaceNum = maxWidth - s.length + spaceSplitLen - 1;
        const spaceGap = Math.floor(spaceNum/(spaceSplitLen - 1));
        const spaceRemainer = spaceNum%(spaceSplitLen - 1);
        let result = "";
        for(let i = 0; i< spaceSplitLen-1; i++){
            result += spaceSplit[i] + (i<spaceRemainer ? " ".repeat(spaceGap + 1): " ".repeat(spaceGap));
        }
        result += spaceSplit[spaceSplitLen - 1];
        return result;
    }
}