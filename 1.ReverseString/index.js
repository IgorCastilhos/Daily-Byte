// Usando um for loop
function reverseStr(str) {
  let reversedStr = "";
  // Cat[i] -> [0] = C
  // Cat[i] -> [1] = a
  // Cat[i] -> [2] = t
  for (let i = str.length - 1; i >= 0; i--) {
    // str.length - 1 = "t", "a", "C"
    reversedStr += str[i];
    // [i] -> [0] - "t"
    // [i] -> [1] - "a"
    // [i] -> [2] - "C"
  }
  return reversedStr;
}
console.log(reverseStr("Cat"));

// Usando os métodos split() + join()
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Cat"));

// Usando o operador spread e o método reverse() + join()
function reverseString2(str) {
  return [...str].reverse().join("");
}

console.log(reverseString2("Cat"));
