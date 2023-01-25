/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const height = grid.length;
  const width = grid[0].length;
  // without input mutation
  // const visited = {};
  let islands = 0;
  
  const dfs = (row, col) => {
    if (row < 0 || row >= height || col < 0 || col >= width || grid[row][col] == 0) return;
    
    // without input mutation
    // if (!visited[`${row}${col}`]); {
    //   grid[row][col] = 0;
    //   visited[`${row}${col}`] = true; 
    // }
    
    grid[row][col] = 0;
    
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }
  
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] == 1) {
        islands++;
        
        dfs(row, col);
      }
    }
  }
  
  return islands;
};