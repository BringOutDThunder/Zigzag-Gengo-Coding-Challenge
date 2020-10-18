/// <reference path="angular.min.js" />


var codeChallengeModule = angular.module("codeChallengeModule", []);

codeChallengeModule.controller("codeChallengeController", function($scope) {
	$scope.inputOne = "";
	$scope.outputOne = "";

	//Level 1
	$scope.checkPalindrome = function () {
		if ($scope.inputOne.length > 0) {
			$scope.outputOne = $scope.palindromeChecker($scope.inputOne);
		} else{
			$scope.outputOne = "";
		}
	}

	//Level 2
	$scope.getLongestPalindrome = function () {
		var input = $scope.inputTwo;
		var palindromes = [];

		if ($scope.palindromeChecker(input)) {
			$scope.outputTwo = input;
		}
		else {
			palindromes = $scope.palindromeSplicer(input, palindromes);
			$scope.outputTwo = palindromes[0];
		}
	}

	//Level 3
	$scope.getMinimumCut = function () {
		var input = $scope.inputThree;
		var palindromes = [];

		if ($scope.palindromeChecker(input)) {
			$scope.outputThree = "0 | " + input;
		}
		else {
			palindromes = $scope.palindromeSplicer(input, palindromes);
			$scope.outputThree = (palindromes.length - 1) + " | " + palindromes.join(" | ");
        }
	}

	//Shared Functions
	$scope.palindromeSplicer = function (input, palindromes) {
		if ($scope.palindromeChecker(input)) {
			palindromes.push(input);
			return palindromes;
		} else {
			var iDivider = 0;
			var cutComplete = false;

			while (iDivider < input.length && !cutComplete) {
				iDivider++;
				var i = -1;
				var isDone = false;

				while (!isDone) {
					i++;

					if ((i + (input.length - iDivider)) > input.length) {
						isDone = true;
					}
					else {
						var palindromeTest = input.substring(i, (input.length - iDivider) + i);

						if ($scope.palindromeChecker(palindromeTest)) {
							palindromes.push(palindromeTest);
							palindromes = $scope.palindromeSplicer(input.substring(0, i) + input.substring((input.length - iDivider) + i, input.length), palindromes);
							cutComplete = true;
							break;
						}
					}
                }
            }
		}
		return palindromes;
    }

	$scope.textReverser = function (input) {
		var inputOneReversed = "";
		for (var i = 0; i < input.length; i++) {
			inputOneReversed = input.charAt(i) + inputOneReversed;
		}
		return inputOneReversed;
	}

	$scope.palindromeChecker = function (input1) {
		if (input1 == $scope.textReverser(input1)) {
			return true;
		} else {
			return false;
		}
	}
});