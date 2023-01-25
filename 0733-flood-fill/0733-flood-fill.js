/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const height = image.length;
  const width = image[0].length;
  const ogColor = image[sr][sc];
  
  const dfs = (row, col) => {
    if (row < 0 || row >= height || col < 0 || col >= width 
        || image[row][col] === newColor || image[row][col] !== ogColor) {
      return;
    } else {
      image[row][col] = newColor;
      
      dfs(row + 1, col, ogColor);
      dfs(row - 1, col, ogColor);
      dfs(row, col + 1, ogColor);
      dfs(row, col - 1, ogColor);
      
      return;
    }
  }
  
  dfs(sr, sc, ogColor);
  
  return image;
};