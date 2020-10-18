This is only created for a coding exam.

This application is a pure front-end only.

To run in:
1. Download the entire code
2. Extract it
3. Open index.html with any browser(Chrome, Firefox, Opera, Safari, Edge, etc..)
4. Enjoy


*********************************************************************************

Functions Explained:

- The [textReverser] function. This function reverts the input text wherein the last character becomes the first, the first becomes the last and so on.

- The [palindromeChecker(input)] function. This function accepts an [input] text parameter and checks whether the input is a valid palindrome. Also depends on [textReverser] function to get the reverted text.

- The [palindromeSplicer(input, palindromes)] function is a function that basically a search for palindromes within the input text. 
	- Accepts two parameters: [input] which is the text where it will search for palindromes and [palindromes] which contains the list of palindromes that've already been found.
	- Returns the first list of palindromes;
	- The first action is to check whether the input has at least one characters otherwise it won't proceed
	- Second actin is to check wheter the input is already a palindrome. If it is a palindrome then it will add it to the list of palindromes, otherwise it will proceed to search for palindromes
	- The search process is to start with the longest text within the input text first, example if the text consist of 10 characters then the first checking will start with the text with 9 characters. The lenth of the text to be checked is determined by the divider [iDivider]. If there are no palindromes with 9 characters found, then it will move to the next one which is 8 characters and so on.
	- Beside from character length, the process should also consider the index where the text is taken. For example the input text is "noonabbad" since the text is 9 characters long, the process will take 8 characters, and there are only two possible texts with 8 characters: "noonabba" and "oonabbad". If for example we take 6 characters then there are 4 possible text: "noonab", "oonabb", "onabba", and "nabbad" respectively. This sequence is determined by the index [i] factor where it will start from left to right.
	- If the first palindrome is found, then it takes away that palindrome text from the input text and add it in the list of palindromes. Then proceeds to search for palindromes in the remaining texts by calling itself for another loop of searching.
	- The process will only be completed when there are no more texts remaining and everything else is a palindrome.


*********************************************************************************	

Challenge and Solutions:

Level 1:
	Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.
	
	Sample Input
	string = "abcdcba"
	
	Sample Output
	true // it's written the same forward and backward
	
	Solution: function [checkPalindrome]
	- The first thing to do is to validate the string input. I created this one to accept any character. The process will not begin if there are no characters in the field. I also limited the maximum character to 50 to prevent users from entering very long text.

----------------------------------------------------


Level 2: function [getLongestPalindrome]
	Now write a function that, given a string, returns its longest palindromic substring.
	You can assume that there will only be one longest palindromic substring. 

	Sample Input
	string = "abaxyzzyxf" 

	Sample Output
	"xyzzyx"
	
	Solution:
	- The first thing to do is to check if the input is a palindrome. Otherwise it will pass the input text and an empty list of palindromes to [palindromeSplicer] function.
	- Since [palindromeSplicer] starts from the longest possible text then it is guaranteed to have its longest palindrome in first line. It will then get the first one from the list of palindromes
	- Although the process can be reduced by stopping the search when the first palindrome is found, I decided not to because the function is shared by another function (Level 3). Otherwise I would have to separate them into two functions.

----------------------------------------------------


Level 3 : function [getMinimumCut]
	Now write a function that returns the minimum number of cuts needed to perform on the string such that each remaining substring is a palindrome.
	
	Sample Input
	string = "noonabbad"
	
	Sample Output
	2 // noon | abba | d

	Solution:
	- First thing to check is the length of the input text. If there are more than one characters then it will proceed to search for palindromes by calling [palindromeSplicer] function with the inpu text and empty list of palindromes as a parameter.
	- Since [palindromeSplicer] starts from the longest possible text then we can guarantee to find the shortest cut because the longer the text to cut the less remaining text to search.
	- After the search is complete then I just take the number of palindromes found minus 1 to get he number of cuts. Then I can display the list of palindromes found as well.
	
----------------------------------------------------
	
*********************************************************************************	

Experience and Feedback:

The test was challenging but is also enjoyable. I'm kind of a bit lazy so I added plugins such as jQuery, bootstrap, angularjs to make me feel at ease while coding especially during the design part. I could have done it with a backend code but I see that the test can be answered just by front-end coding.

It took me about 8 hrs to complete all this including this one that you're reading. 

Probably 40% of thinking
	, 10% of logic coding
	, 20% hr of debugging
	, 10% hr of designing
	, 20 hrs of documenting

----------------------------------------------------


Created by: leeroquebudaden@gmail.com 
Date Created: 2020-OCT-18