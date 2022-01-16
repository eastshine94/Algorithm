function solution(expression) {
  let answer = 0;
  const ops = [];
  const numList = [];
  const opList = [];
  const exprOpIdxList = expression.matchAll(/[\+\-\*]/gi);
  let prevIdx = 0;
  for (let op of exprOpIdxList) {
    opList.push(op[0]);
    if (!ops.includes(op[0])) {
      ops.push(op[0]);
    }
    numList.push(Number(expression.substring(prevIdx, op.index)));
    prevIdx = op.index + 1;
  }
  numList.push(Number(expression.substring(prevIdx)));
  const visited = new Array(ops.length).fill(false);

  const calculate = (op, num1, num2) => {
    switch (op) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return;
    }
  };

  const getResult = orderedOps => {
    let cloneNumList = [...numList];
    let cloneOpList = [...opList];
    orderedOps.forEach(op => {
      const numStack = [cloneNumList.shift()];
      const opStack = [];
      while (cloneOpList.length > 0) {
        const currVal = cloneNumList.shift();
        const currOp = cloneOpList.shift();
        if (currOp === op) {
          const result = calculate(op, numStack.shift(), currVal);
          numStack.unshift(result);
        } else {
          numStack.unshift(currVal);
          opStack.unshift(currOp);
        }
      }
      cloneNumList = [...numStack.reverse()];
      cloneOpList = [...opStack.reverse()];
    });
    answer = Math.max(answer, Math.abs(cloneNumList[0]));
  };
  const findOrderAndSol = arr => {
    if (arr.length === ops.length) {
      getResult(arr);
      return;
    }
    for (let i = 0; i < ops.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        findOrderAndSol([...arr, ops[i]]);
        visited[i] = false;
      }
    }
  };

  findOrderAndSol([]);

  return answer;
}
