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
  return Math.abs(value-42);
}

function calculatesFarePrice(start, destination) {
  distance = distanceFromHqInFeet(Math.abs(destination - start));
  if (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance <= 2000) {
    return distance * 0.02;
  }
  else if (distancae > 2000 && distance <= 2500) {
    return 25;
  }
}