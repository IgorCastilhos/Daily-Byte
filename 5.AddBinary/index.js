/*

"100" + "1", return "101"
"11" + "1", return "100"
"1" + "0", return "1"

*/

function addBinary(a, b) {
  const sum = parseInt(a, 2) + parseInt(b, 2);
  return sum.toString(2);
}

console.log(addBinary("100", "1"));
console.log(addBinary("11", "1"));
console.log(addBinary("1", "0"));
