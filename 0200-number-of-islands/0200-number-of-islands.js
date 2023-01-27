/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsBFS = function(grid) {
  const height = grid.length;
  const width = grid[0].length;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let islands = 0;
  // without input mutation
  const visited = {};
  
  const bfs = (row, col) => {
    const queue = [[row, col]];
    visited[`${row},${col}`] = true;

    while (queue.length) {
      const [cr, cc] = queue.shift();
      
      for (const [r, c] of directions) {
        const nr = cr + r;
        const nc = cc + c;
        
        if (nr >= 0 && nr < height && nc >= 0 & nc < width && grid[nr][nc] === "1" && !visited[`${nr},${nc}`]) {
          queue.push([nr, nc]);
          visited[`${nr},${nc}`] = true;
        }
      }
    }
    
  }
  
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
        if (!visited[`${row},${col}`] && grid[row][col] === "1") {
          islands++;
          bfs(row, col);
        }
    }
  }
  console.log(visited);
  return islands;
}

var numIslands = function(grid) {
  const height = grid.length;
  const width = grid[0].length;
  // without input mutation
  const visited = {};
  let islands = 0;
  
  const dfs = (row, col) => {
    if (row < 0 || row >= height || col < 0 || col >= width || grid[row][col] == 0 || visited[`${row},${col}`]) return;
    
    // without input mutation
    visited[`${row},${col}`] = true; 
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
    
    // with mutation
    // grid[row][col] = 0;
    // dfs(row + 1, col);
    // dfs(row - 1, col);
    // dfs(row, col + 1);
    // dfs(row, col - 1);
  }
  
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] == 1 && !visited[`${row},${col}`]) {
        islands++;
        
        dfs(row, col);
      }
    }
  }
    
  return islands;
};