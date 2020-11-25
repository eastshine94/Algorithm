function solution(operations) {
    const queue = [];
    operations.forEach(op => {
        const sp = op.split(" ");
        const command = sp[0];
        const num = parseInt(sp[1]);

        if (command === "I") {
            queue.push(num);
        }
        else {
            queue.sort((a, b) => a - b);
            if (num === 1) {
                queue.pop();
            }
            else {
                queue.shift();
            }
        }
    });
    queue.sort((a, b) => a - b);
    return queue.length === 0 ? [0,0] : [queue[queue.length-1], queue[0]];
}
