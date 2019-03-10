// Code your solution in this file!
function distanceTravelledInFeet(beginBlock, endBlock) {
  distance = endBlock - beginBlock;
  if (distance < 0) {
    distance = -distance;
  }
  return (endBlock-beginBlock)*264;
}
