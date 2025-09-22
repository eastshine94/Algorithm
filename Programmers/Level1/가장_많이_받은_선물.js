function solution(friends, gifts) {
  const giftLog = {};
  const giftIndex = {};
  const giftNum = {};
  friends.forEach((val) => {
    giftIndex[val] = 0;
    giftNum[val] = 0;
  });

  gifts.forEach((val) => {
    if (giftLog[val]) {
      giftLog[val] += 1;
    } else {
      giftLog[val] = 1;
    }

    const [sender, receiver] = val.split(" ");
    giftIndex[sender] += 1;
    giftIndex[receiver] -= 1;
  });
  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const friend1 = friends[i];
      const friend2 = friends[j];
      const key1 = `${friend1} ${friend2}`;
      const key2 = `${friend2} ${friend1}`;
      const num1 = giftLog[key1] ?? 0;
      const num2 = giftLog[key2] ?? 0;

      if (num1 > num2) {
        giftNum[friend1] += 1;
      } else if (num1 < num2) {
        giftNum[friend2] += 1;
      } else {
        if (giftIndex[friend1] > giftIndex[friend2]) {
          giftNum[friend1] += 1;
        }
        if (giftIndex[friend1] < giftIndex[friend2]) {
          giftNum[friend2] += 1;
        }
      }
    }
  }

  return Math.max(...Object.values(giftNum));
}
