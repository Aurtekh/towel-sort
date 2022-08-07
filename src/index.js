
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
  if (matrix === undefined) {
    return arr
  } else {
    matrix.forEach((item, index) => {
      if (index % 2 === 0) {
        item.sort((a, b) => a - b);
        arr = arr.concat(item);
      } else {
        item.sort((a, b) => b - a);
        arr = arr.concat(item);
      }
    });
  }
    return arr
      }
