function isPalindrome(str) {
  return (
    str ==
    str
      .split("")
      .reverse()
      .join("")
  );
}
function noOfUniqueChars(str) {
  console.log("in noOfUniqueChars function");
  var temp = "";
  for (var i = 0; i < str.length; i++) {
    console.log("in noOfUniqueChars function for loop");

    console.log(temp.includes(str.charAt(i)));
    if (!temp.includes(str.charAt(i))) {
      console.log("in noOfUniqueChars function for loop if loop");
      temp.concat(str.charAt(i));
      temp.concat("aaaa");
      console.log(temp);
    }
  }
  return temp.length;
}
var iplist = "aaa abc abab".split(" ");
console.log(isPalindrome("aababaa"));
console.log(noOfUniqueChars("aababaa"));
console.log("abc".concat("def"));
