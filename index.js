// Code your solution in this file!
function distanceTravelledInFeet(beginBlock, endBlock) {
  distance = endBlock - beginBlock;
  if (distance < 0) {
    distance = -distance;
  }
  return distance*264;
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264;
}

function distanceFromHqInBlocks(value) {

  return Math.abos(value-42);
}
