
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let k = 0;
    let arr=[];
    for(let i = 0; i < matrix.length;i++){
        for(let j = 0; j < matrix[i].length;j++){
            arr[k] = matrix[i][j];
            k++;
        }
    }
  return arr;
}
