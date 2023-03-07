/*
This question is asked by Google. Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

Ex: Given the following strings…

"USA", return true
"Calvin", return true
"compUter", return false
"coding", return true
*/

function capitalization(str) {
  // Check if the string matches one of the correct capitalization patterns
  return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(str);
}

console.log(capitalization("USA"));
console.log(capitalization("Calvin"));
console.log(capitalization("compUter"));
console.log(capitalization("coding"));
