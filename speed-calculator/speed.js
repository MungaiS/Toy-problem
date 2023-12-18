// Creating a function called calculateDemeritPoints
function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  let demeritPoints = 0;

  if (speed > speedLimit) {
    demeritPoints = Math.floor((speed - speedLimit) / 5);
  }

  return demeritPoints;
}
// Convertthr speed into integers using ParseInt
function main() {
  const speed = parseInt(prompt("Enter the speed of the car (in km/h):"));

  const demeritPoints = calculateDemeritPoints(speed);

  if (demeritPoints > 0) {
    console.log("Points:", demeritPoints);
    if (demeritPoints > 12) {
      console.log("License suspended");
    }
  } else {
    console.log("Ok");
  }
}

