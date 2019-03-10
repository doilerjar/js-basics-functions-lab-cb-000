// Code your solution in this file!
function distanceTravelledInFeet(beginBlock, endBlock) {
  distance = endBlock - beginBlock;
  if (distance < 0) {
    distance = -distance;
  }
  return distance*264;
}

function distanceFromHqInBlocks(value) {
  return value * 264;
}
