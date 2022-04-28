function solution(n, k, cmd) {
  const deleteList = [];

  let prevNode = new Node(0);
  let selectedNode = prevNode;

  for (let i = 1; i < n; i++) {
    const currNode = new Node(i, prevNode);
    prevNode.next = currNode;
    prevNode = currNode;
    if (i === k) {
      selectedNode = currNode;
    }
  }

  cmd.forEach(val => {
    if (val === 'C') {
      deleteList.push(selectedNode);
      const { prev, next } = selectedNode;
      if (prev && next) {
        prev.next = next;
        next.prev = prev;
        selectedNode = next;
      } else if (prev) {
        prev.next = null;
        selectedNode = prev;
      } else {
        next.prev = null;
        selectedNode = next;
      }
    } else if (val === 'Z') {
      const restoreNode = deleteList.pop();
      const { prev, next } = restoreNode;
      if (prev) {
        prev.next = restoreNode;
      }
      if (next) {
        next.prev = restoreNode;
      }
    } else {
      const [direction, num] = val.split(' ');
      if (direction === 'U') {
        for (let i = 0; i < Number(num); i++) {
          selectedNode = selectedNode.prev;
        }
      } else {
        for (let i = 0; i < Number(num); i++) {
          selectedNode = selectedNode.next;
        }
      }
    }
  });

  const answer = Array(n).fill('O');
  deleteList.forEach(node => {
    answer[node.idx] = 'X';
  });

  return answer.join('');
}

function Node(idx, prevNode) {
  this.idx = idx;
  this.prev = prevNode;
  this.next;
}
