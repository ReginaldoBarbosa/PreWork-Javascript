// Rover Object Goes Here
// ======================
const allDirections = ['"N" - North','"S" - South','"E" - East','"W" - West'];
const roverOne = {
  x:5,
  y:5,
  name: 'Rover ONE',
  direction: allDirections[0]
};

const roverTwo = {
  x:3,
  y:3,
  name: 'Rover Two',
  direction: allDirections[0]
};
/*
0 - Norte
1 - Sul
2 - Leste
3 - Oeste
*/
var direction = allDirections[0];
// ======================
// OBSTACLES
// ======================
const rockOne = {
  x:4,
  y:5
};

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('===========================================================');
console.log(roverOne.name + ' start in the position (X:' + roverOne.x + ' Y:' + roverOne.y + ') in face to ' + roverOne.direction + '.');
console.log('===========================================================');
console.log(roverTwo.name + ' start in the position (X:' + roverTwo.x + ' Y:' + roverTwo.y + ') in face to ' + roverTwo.direction + '.');
console.log('===========================================================');
console.log('It has a rock at position (X:' + rockOne.x + ' Y:' + rockOne.y + ').');
console.log('===========================================================');
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function compareRovers(rover) {
  let otherRover = {}
  if (rover.name == roverOne.name) {
    otherRover.x = roverTwo.x;
    otherRover.y = roverTwo.y;
  } else {
    otherRover.x = roverOne.x;
    otherRover.y = roverOne.y;
  }
  return otherRover;
}

function switchsNegative(axis, minValue, rover) {
  let otherRover = compareRovers(rover);
  rover[axis] -= 1;
  if (rover.x == rockOne.x && rover.y == rockOne.y) {
    console.log('you found a stone! Turn around!\n');
    rover[axis] += 1;
  } else if (rover.x == otherRover.x && rover.y == otherRover.y) {
    console.log('you found another rover! Turn around!\n');
    rover[axis] += 1;
  } else if (rover[axis] < minValue) {
    console.log('ALERT: YOU SHALL NOT PASS\n');
    rover[axis] += 1;
  }
  return rover[axis];
}

function switchsPositive(axis, maxValue, rover) {
  let otherRover = compareRovers(rover);
  rover[axis] += 1;
  if (rover.x == rockOne.x && rover.y == rockOne.y) {
    console.log('you found a stone! Turn around!\n');
    rover[axis] -= 1;
  } else if (rover.x == otherRover.x && rover.y == otherRover.y) {
    console.log('you found another rover! Turn around!\n');
    rover[axis] -= 1;
  } else if (rover[axis] > maxValue) {
    console.log('ALERT: YOU SHALL NOT PASS\n');
    rover[axis] -= 1;
  }
  return rover[axis];
}

function finalMessege(rover, fction) {
  console.log(fction + ' function was successfully executed\n');
  console.log(rover.name + ' is in the position (X:' + rover.x + ' Y:' + rover.y + ') in face to ' + rover.direction + '.\n');
}

function turnLeft(rover) {
  let y = 'y';
  let x = 'x';
  if(rover.direction === allDirections[0]) {
    rover.direction = allDirections[3];
  } else if (rover.direction == allDirections[1]) {
    rover.direction = allDirections[2];
  } else if (rover.direction == allDirections[2]) {
    rover.direction = allDirections[0];
  } else if (rover.direction == allDirections[3]) {
    rover.direction = allDirections[1];
  } else {
    console.log('ALERT: Error turnLeft function');
  }
  finalMessege(rover,'Turn left');
}

function turnRight(rover) {
  let y = 'y';
  let x = 'x';
  if(rover.direction == allDirections[0]) {
    rover.direction = allDirections[2];
  } else if (rover.direction == allDirections[1]) {
    rover.direction = allDirections[3];
  } else if (rover.direction == allDirections[2]) {
    rover.direction = allDirections[1];
  } else if (rover.direction == allDirections[3]) {
    rover.direction = allDirections[0];
  } else {
    console.log('ALERT: Error turnLeft function');
  }
  finalMessege(rover,'Turn right');
}

function moveForward(rover) {
  let y = 'y';
  let x = 'x';
  if(rover.direction == allDirections[0]) {
    rover.x = switchsNegative(x,0,rover);
  } else if (rover.direction == allDirections[1]) {
    rover.x = switchsPositive(x,10,rover);
  } else if (rover.direction == allDirections[2]) {
    rover.y = switchsPositive(y,10,rover);
  } else if (rover.direction == allDirections[3]) {
    rover.y = switchsNegative(y,0,rover);
  } else {
    console.log('ALERT: Error moveForward function');
  }
  finalMessege(rover,'Move forward');
}

function moveBackwards(rover) {
  let y = 'y';
  let x = 'x';
  if(rover.direction == allDirections[0]) {
    rover.x = switchsPositive(x,10,rover);
  } else if (rover.direction == allDirections[1]) {
    rover.x = switchsNegative(x, 0,rover);
  } else if (rover.direction == allDirections[2]) {
    rover.y = switchsNegative(y,0,rover);
  } else if (rover.direction == allDirections[3]) {
    rover.y = switchsPositive(y,10,rover);
  } else {
      console.log('ALERT: Error moveBackwards function');
  }
  finalMessege(rover,'Move backwards');
}

function command (directions, rover) {
  if (rover.name == roverOne.name || rover.name == roverTwo.name) {
    for (let i = 0; i < directions.length; i += 1) {
      if (directions[i].toLowerCase() == 'f') {
        moveForward(rover);
      } else if (directions[i].toLowerCase() == 'r') {
        turnRight(rover);
      } else if (directions[i].toLowerCase() == 'l') {
        turnLeft(rover);
      } else if (directions[i].toLowerCase() == 'b') {
        moveBackwards(rover);
      } else {
        console.log('please insert: (f) for forward, (r) for right, (l) for left, or (b) for backward\n');
      }
    }
  } else {
    console.log("I'am so sorry, we have only 'roverOne' or 'roverTwo' avaliable \n");
  }
}

//command('frflfffff',roverOne);
command('FFFFLFFFFFFFLLFFFFFLBBBBB',roverTwo);