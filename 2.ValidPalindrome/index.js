/*
    Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters. 
    
    Note: a palindrome is a sequence of characters that reads the same forwards and backwards.


*/

function isPalindrome(s) {
  // Remove non-alphabetical characters and convert to lowercase
  s = s.replace(/[^a-zA-Z]/g, "").toLowerCase();
  // Compare with reversed string

  return s === s.split("").reverse().join("");
}

console.log(isPalindrome("level"));
console.log(isPalindrome("algorithm"));
console.log(isPalindrome("A man, a plan, a canal: Panama."));

// function testPalindrome(str) {
//   if (str.split("").reverse().join("") == str) {
//     return true;
//   } else {
//     return false;
//   }
// }
