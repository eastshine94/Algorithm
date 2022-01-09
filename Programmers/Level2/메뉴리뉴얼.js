function solution(orders, course) {
  let answer = [];
  orders = orders.map(val => {
    const charList = val.split('');
    charList.sort((a, b) => a.localeCompare(b));
    return charList.join('');
  });

  const findSubMenu = (order, limit, idx, subMenu, subMenus) => {
    if (subMenu.length === limit) {
      !!subMenus[subMenu] ? subMenus[subMenu]++ : (subMenus[subMenu] = 1);
      return;
    }
    for (let i = idx; i < order.length; i++) {
      findSubMenu(order, limit, i + 1, subMenu + order.charAt(i), subMenus);
    }
  };

  const findCourseMenu = num => {
    let max = 2;
    let returnList = [];
    const subMenus = {};
    for (let i = 0; i < orders.length; i++) {
      const order = orders[i];
      findSubMenu(order, num, 0, '', subMenus);
    }
    for (let key in subMenus) {
      const val = subMenus[key];
      if (val > max) {
        returnList = [key];
        max = val;
      } else if (val === max) {
        returnList.push(key);
      }
    }
    return returnList;
  };

  course.forEach(val => {
    answer = [...answer, ...findCourseMenu(val)];
  });

  return answer.sort((a, b) => a.localeCompare(b));
}
