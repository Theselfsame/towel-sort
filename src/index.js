
// You should implement your task here.
module.exports = function towelSort (matrix) {
  let arr = [];
  if (!Array.isArray(matrix) || matrix.length == 0) {
    return arr;
  } else {
    for (let i = 1; i < matrix.length; i+=2) {
       matrix[i].reverse();
    }
  }
  matrix = matrix.join(",").split(",");
  return matrix;
}
