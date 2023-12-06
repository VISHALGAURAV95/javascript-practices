/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase for case-insensitivity
  const lowerStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string and compare with the original
  const reversedStr = lowerStr.split('').reverse().join('');

  // Check if the reversed string is equal to the original string
  return lowerStr === reversedStr;
}

module.exports = isPalindrome;
