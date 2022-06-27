/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  points.sort((a, b) => squaredDistance(a) - squaredDistance(b));
  
  return points.slice(0, k);
};

var squaredDistance = function([x, y]) {
  return Math.pow(x, 2) + Math.pow(y, 2);
}