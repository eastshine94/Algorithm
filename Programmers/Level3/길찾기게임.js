function solution(nodeinfo) {
  let answer = [[], []];

  const getPre = node => {
    const val = node.val;
    answer[0].push(val);
    if (node.left) {
      getPre(node.left);
    }
    if (node.right) {
      getPre(node.right);
    }
  };
  const getPost = node => {
    const val = node.val;
    if (node.left) {
      getPost(node.left);
    }
    if (node.right) {
      getPost(node.right);
    }
    answer[1].push(val);
  };

  const sorted = nodeinfo
    .map((pos, idx) => {
      return { pos, val: idx + 1 };
    })
    .sort((a, b) => {
      const [x1, y1] = a.pos;
      const [x2, y2] = b.pos;
      return y2 === y1 ? x1 - x2 : y2 - y1;
    });

  const root = makeTree(sorted);
  getPre(root);
  getPost(root);
  return answer;
}

function Node(val) {
  this.val = val;
  this.left;
  this.right;
}

const makeTree = tree => {
  if (tree.length === 0) {
    return null;
  }
  const rootInfo = tree[0];
  const root = new Node(rootInfo.val);
  const left = tree.filter(val => val.pos[0] < rootInfo.pos[0]);
  const right = tree.filter(val => val.pos[0] > rootInfo.pos[0]);

  root.left = makeTree(left);
  root.right = makeTree(right);

  return root;
};
