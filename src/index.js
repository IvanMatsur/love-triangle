/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var pairsCnt = 0;
  for(var i = 0; i < preferences.length; i++) {
    var firstLoves = preferences[i] - 1;
    var secondLoves = preferences[firstLoves] - 1;
    var thirdLoves = preferences[secondLoves] - 1;

    if(firstLoves !== secondLoves && secondLoves !== thirdLoves && thirdLoves === i) {
      pairsCnt++;
    }
  }

  return pairsCnt / 3;
};