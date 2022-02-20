const twoSum = require("./index");

test("twoSum([2,7,11,15], 9) returns [0,1]", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([
    0,
    1
  ]);
});

test("twoSum([3, 2, 4], 6) returns [1,2]", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});