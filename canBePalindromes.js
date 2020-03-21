function isPalindrome(str) {
	return str == str.split('').reverse().join('');
}
function uniqueChars(str) {
	/*
	**Takes a string as input
	**outputs a character array removing the duplicates in the given string
	**
	**working fine
	*/
	var temp = [];
	for (var i = 0; i < str.length; i++) if (!temp.includes(str.charAt(i))) temp.push(str.charAt(i));
	return temp;
}
function isFrequencyOfCharOdd(ch, str) {
	/*
	**Takes a charater and string as input
	**Outputs the number of occurences of that character in the string
	**
	**Working fine
	*/
	var count = 0;
	var strList=str.split("");
	for (var i = 0; i < strList.length; i++)
		if (strList[i] == ch) count++;
	if (count % 2 == 0) return false;
	return true;
}
function canBePalindrome(str) {
	/*
	**Takes a string as input
	**creates a character array of that string
	**uses foreach to pass each character to the frequencyOfEachChar function to get frequency of particular character in that string
	**returns array of frequencies respictively
	**
	**
	**This basically works on the principle that a string could be a palindrome only if no.of chars that exists odd no.of times is <2
	*/

	if(isPalindrome(str)) return ("is a Palindrome"); //return true;
	var uniquecharslist = uniqueChars(str);
	var frequencies = [];
	for (var i = 0; i < uniquecharslist.length; i++) frequencies.push(isFrequencyOfCharOdd(uniquecharslist[i], str));
	var oddcount = 0;
	for (var i = 0; i < frequencies.length; i++)
		if (frequencies[i] / 2 != 0)oddcount++;
	if (oddcount > 1) return ("Couldn't be a Palindrome"); //return true;
	return ("Could be a Palindrome"); //return false;
}
function main()
{
	var iplist = 'aaa abc abab aaabbbc'.split(' ');
	//var canBePalindromeResults=[];
	for(var i=0; i<iplist.length;i++)
		console.log(iplist[i]+" - "+canBePalindrome(iplist[i]));//canBePalindromeResults.push(iplist[i]+" - "+canBePalindrome(iplist[i]));
	//console.log(canBePalindromeResults);
}
main();