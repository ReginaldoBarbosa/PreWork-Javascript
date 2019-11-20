// Rover Object Goes Here
// ======================
const allDirections = ['North','South','East','West'];
const roverOne = {
  x:5,
  y:5
};
roverOne.direction = allDirections[0]
roverOne.name = "Rover ONE"
const roverTwo = {
  x:3,
  y:3
};
roverTwo.direction = allDirections[0]
roverTwo.name = "Rover TWO"
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
function turnLeft(rover, howManySteps){
  if(rover.direction === allDirections[0]) {
    rover.direction = allDirections[3];
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 1; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.y++
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.y++
            break;
          case rover.y > 0:
            rover.y--
            break;
          case rover.y <= 0:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      } else {
        console.log("ERROR: Insert a positive value!");
      }
    }
  } else if (rover.direction == allDirections[1]) {
    rover.direction = allDirections[2];
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 1; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.y--
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.y--
            break;
          case rover.y < 10:
            rover.y++
            break;
          case rover.y >= 10:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      } else {
        console.log("ERROR: Insert a positive value!");
      }
    }
  } else if (rover.direction == allDirections[2]) {
    rover.direction = allDirections[0];
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 1; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.x++
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.x++
            break;
          case rover.x > 0:
            rover.x--
            break;
          case rover.x <= 0:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      } else {
        console.log("ERROR: Insert a positive value!");
      }
    }
  } else if (rover.direction == allDirections[3]) {
    rover.direction = allDirections[1];
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 1; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.x--
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.x--
            break;
          case rover.x < 10:
            rover.x++
            break;
          case rover.x >= 10:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      } else {
        console.log("ERROR: Insert a positive value!");
      }
    }
  } else {    
      console.log("ALERT: Error turnLeft function");
  }
  console.log('Turn left function was successfully executed.');
  console.log(rover.name + ' is in the position (X:' + rover.x + ' Y:' + rover.y + ') in face to ' + rover.direction + '.');   
}

function turnRight(rover, howManySteps){
  if(rover.direction == allDirections[0]) {
    rover.direction = allDirections[2];
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 1; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.y--
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.y--
            break;
          case rover.y < 10:
            rover.y++
            break;
          case rover.y >= 10:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      }
    }    
  } else if (rover.direction == allDirections[1]) {
    rover.direction = allDirections[3];
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 1; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.y++
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.y++
            break;
          case rover.y > 0:
            rover.y--
            break;
          case rover.y <= 0:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      }
    }
  } else if (rover.direction == allDirections[2]) {
    rover.direction = allDirections[1];
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 1; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.x--
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.x--
            break;
          case rover.x < 10:
            rover.x++
            break;
          case rover.x >= 10:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      }
    }
  } else if (rover.direction == allDirections[3]) {
    rover.direction = allDirections[0];
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 1; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.x++
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.x++
            break;
          case rover.x > 0:
            rover.x--
            break;
          case rover.x <= 0:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      }
    }
  } else {    
      console.log("ALERT: Error turnLeft function");
  }
  console.log('Turn right function was successfully executed');
  console.log(rover.name + ' is in the position (X:' + rover.x + ' Y:' + rover.y + ') in face to ' + rover.direction + '.'); 
}

function moveForward(rover, howManySteps){
  if(rover.direction == allDirections[0]) {
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 0; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.x++
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.x++
            break;
          case rover.x > 0:
            rover.x--
            break;
          case rover.x <= 0:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      } else {
        console.log("ERROR: Insert a positive value!");
      }
    }
  } else if (rover.direction == allDirections[1]) {
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 0; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.x--
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.x--
            break;
          case rover.x < 10:
            rover.x++
            break;
          case rover.x >= 10:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      } else {
        console.log("ERROR: Insert a positive value!");
      }
    }
  } else if (rover.direction == allDirections[2]) {
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 0; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.y--
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.y--
            break;
          case rover.y < 10:
            rover.y++
            break;
          case rover.y >= 10:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      } else {
        console.log("ERROR: Insert a positive value!");
      }
    }
  } else if (rover.direction == allDirections[3]) {
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 0; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.y++
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.y++
            break;
          case rover.y > 0:
            rover.y--
            break;
          case rover.y <= 0:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      } else {
        console.log("ERROR: Insert a positive value!");
      }
    }
  } else {    
      console.log("ALERT: Error moveForward function");
  }
  console.log('Move forward function was successfully executed');
  console.log(rover.name + ' is in the position (X:' + rover.x + ' Y:' + rover.y + ') in face to ' + rover.direction + '.');  
}

function moveBackwards(rover, howManySteps){
  if(rover.direction == allDirections[0]) {
    rover.direction = allDirections[1];
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 1; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.x--
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.x--
            break;
          case rover.x < 10:
            rover.x++
            break;
          case rover.x >= 10:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      } else {
        console.log("ERROR: Insert a positive value!");
      }
    }
  } else if (rover.direction == allDirections[1]) {
    rover.direction = allDirections[0];
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 1; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.x++
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.x++
            break;
          case rover.x > 0:
            rover.x--
            break;
          case rover.x <= 0:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      } else {
        console.log("ERROR: Insert a positive value!");
      }
    }
  } else if (rover.direction == allDirections[2]) {
    rover.direction = allDirections[3];
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 1; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.y++
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.y++
            break;
          case rover.y > 0:
            rover.y--
            break;
          case rover.y <= 0:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      } else {
        console.log("ERROR: Insert a positive value!");
      }
    }
  } else if (rover.direction == allDirections[3]) {
    rover.direction = allDirections[2];
    let otherRover = {};
    if (rover == roverOne) {
      otherRover.x = roverTwo.x;
      otherRover.y = roverTwo.y;
    } else {
      otherRover.x = roverOne.x;
      otherRover.y = roverOne.y;
    }
    for(let i = 1; i < howManySteps; i++) {
      if (howManySteps > 0) {
        switch (true) {
          case rover.x == rockOne.x && rover.y == rockOne.y:
            console.log('you found a stone! Turn around!');
            rover.y--
            break;
          case rover.x == otherRover.x && rover.y == otherRover.y:
            console.log('you found another rover! Turn around!');
            rover.y--
            break;
          case rover.y < 10:
            rover.y++
            break;
          case rover.y >= 10:
            console.log("ALERT: YOU SHALL NOT PASS");
            i = howManySteps;
            break;
        }
      } else {
        console.log("ERROR: Insert a positive value!");
      }
    }
  } else {    
      console.log("ALERT: Error moveBackwards function");
  }
  console.log('Move backwards function was successfully executed');
  console.log(rover.name + ' is in the position (X:' + rover.x + ' Y:' + rover.y + ') in face to ' + rover.direction + '.');  
}








turnRight(roverOne, 2)