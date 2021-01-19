const testVar = {};

function superbowlWin(arr) {
  const temp = arr.find((e) => {
    return e.result === "W";
  });
  return temp ? temp.year : undefined;
}
