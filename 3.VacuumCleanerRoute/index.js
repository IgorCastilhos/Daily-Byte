/*
Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

Ex: Given the following strings...

"LR", return true
"URURD", return false
"RUULLDRD", return true
*/

function isReturningToOrigin(moves) {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    if (move === "L") {
      x--;
    } else if (move === "R") {
      x++;
    } else if (move === "U") {
      y++;
    } else if (move === "D") {
      y--;
    }
  }
  return x === 0 && y === 0;
}

console.log(isReturningToOrigin("LR")); // Output: true
console.log(isReturningToOrigin("URURD")); // Output: false
console.log(isReturningToOrigin("RUULLDRD")); // Output: true

// big o - O(N), tempo linear. À medida que o comprimento do input 'moves' cresce, a iteração também aumenta.
