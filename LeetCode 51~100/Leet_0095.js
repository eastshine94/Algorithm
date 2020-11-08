var generateTrees = function(n) {
    
    if (n==0) return [];
    return createBST(1, n);
};


const createBST = (start, end) => {
        
    if (start > end) return [null];
    const arrBST = [];

    for (let i = start; i <= end; i++) {
        
        let leftTree = createBST(start, i-1);
        let rightTree = createBST(i+1, end);

        for (let left of leftTree) {
            for (let right of rightTree) {
                const tree = new TreeNode(i, left, right);
                arrBST.push(tree);
            } 
        }  
    }
    return arrBST;
}