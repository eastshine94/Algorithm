function solution(bandage, health, attacks) {
  let hp = health;
  for (let i = 0; i < attacks.length; i++) {
    const [sec, damage] = attacks[i];
    hp -= damage;
    if (hp <= 0) {
      return -1;
    }
    if (i + 1 < attacks.length) {
      const healTime = attacks[i + 1][0] - sec - 1;
      const addedHp =
        bandage[1] * healTime + bandage[2] * Math.floor(healTime / bandage[0]);
      hp = hp + addedHp >= health ? health : hp + addedHp;
    } else {
      return hp;
    }
  }

  return -1;
}
