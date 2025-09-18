function getTotalSec(time) {
  const [min, sec] = time.split(":");
  return Number(min) * 60 + Number(sec);
}

function skipOp(posTotalSec, opStartlSec, opEndSec) {
  if (posTotalSec >= opStartlSec && posTotalSec <= opEndSec) {
    return opEndSec;
  }
  return posTotalSec;
}

function goToprev(posTotalSec) {
  return posTotalSec - 10 < 0 ? 0 : posTotalSec - 10;
}

function goToNext(videoTotalSec, posTotalSec) {
  return posTotalSec + 10 >= videoTotalSec ? videoTotalSec : posTotalSec + 10;
}

function convertSecToTime(totalSec) {
  const min = Math.floor(totalSec / 60)
    .toString()
    .padStart(2, "0");
  const sec = (totalSec % 60).toString().padStart(2, "0");

  return `${min}:${sec}`;
}

function solution(video_len, pos, op_start, op_end, commands) {
  let posTotalSec = getTotalSec(pos);
  const videoTotalSec = getTotalSec(video_len);
  const opStartlSec = getTotalSec(op_start);
  const opEndSec = getTotalSec(op_end);

  posTotalSec = skipOp(posTotalSec, opStartlSec, opEndSec);

  commands.forEach((command) => {
    switch (command) {
      case "prev": {
        posTotalSec = goToprev(posTotalSec);
        posTotalSec = skipOp(posTotalSec, opStartlSec, opEndSec);
        break;
      }

      case "next": {
        posTotalSec = goToNext(videoTotalSec, posTotalSec);
        posTotalSec = skipOp(posTotalSec, opStartlSec, opEndSec);
        break;
      }
      default:
        break;
    }
  });

  return convertSecToTime(posTotalSec);
}
