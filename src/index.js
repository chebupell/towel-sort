module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];

  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 0) {
      // Четная строка: добавляем элементы в прямом порядке
      for (let j = 0; j < matrix[i].length; j += 1) {
        result.push(matrix[i][j]);
      }
    } else {
      // Нечетная строка: добавляем элементы в обратном порядке
      for (let j = matrix[i].length - 1; j >= 0; j -= 1) {
        result.push(matrix[i][j]);
      }
    }
  }
  return result;
};
