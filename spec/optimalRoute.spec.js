const optimalRoute = require('../optimalRoutes.js');

const graph = [ [ 0, 2, 0, 6, 0 ],
[ 2, 0, 3, 8, 5 ],
[ 0, 3, 0, 0, 7 ],
[ 6, 8, 0, 0, 9 ],
[ 0, 5, 7, 9, 0 ] ];

describe(`optimal path from 'start ' building to all should be 16 with [ '0  - 1', '1  - 2', '0  - 3', '1  - 4' ]`, () => {
  it('should find true to be true', () => {
  const shortestPath = optimalRoute(graph, 0);
  expect(shortestPath).toEqual({
    distance: 16,
    path: [ '0  - 1', '1  - 2', '0  - 3', '1  - 4' ],
  });
  });

  it('should find false to be different from true', () => {
    expect(false).not.toBe(true);
  });
});

// test(`optimal path from 'start ' building to all should be 16 with [ '0  - 1', '1  - 2', '0  - 3', '1  - 4' ]`, () => {
//   const shortestPath = optimalRoute(graph, 0);
//   expect(shortestPath).toEqual({
//     distance: 16,
//     path: [ '0  - 1', '1  - 2', '0  - 3', '1  - 4' ],
//   });
// });
