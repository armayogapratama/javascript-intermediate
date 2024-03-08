function palindromeSwapper(str) {
  if (isPalindrome(str)) return true;

  for (var i = 0; i < str.length - 1; i++) {
    let newStr = "";
    for (var j = 0; j < str.length; j++) {
      if (i === j) {
        newStr += str[j + 1];
        newStr += str[j];
        j++;
      } else {
        newStr += str[j];
      }
    }
    // console.log(newStr);
    if (isPalindrome(newStr)) return true;
  }
  return false;
}

function isPalindrome(str) {
  if (str.split("").reverse().join("") === str) return true;
  return false;
}

console.log(palindromeSwapper("arcecar")); // true
console.log(palindromeSwapper("racecar")); // true
console.log(palindromeSwapper("recacar")); // false
console.log(palindromeSwapper("icvic")); // true
console.log(palindromeSwapper("makan")); // false
