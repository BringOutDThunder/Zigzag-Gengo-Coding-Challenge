var codeChallengeModule = angular.module("codeChallengeModule",[]);

codeChallengeModule.controller("levelOneController", function($scope) {
	var inputOne = "";
	var outputOne = false;
	if(inputOne.length > 0) {
		var inputOneReversed = "";
		
		for(var i = 0; i < inputOne.length; i++){
			inputOneReversed = inputOne.charAt(i) + inputOneReversed;
		}
		
		if(inputOne == inputOneReversed) {
			outputOne = true;
		} else{
			outputOne = false;
		}
	}
	
	$scope.inputOne = inputOne;
	$scope.outputOne = outputOne;
});

codeChallengeModule.controller("levelTwoController", function($scope) {
	var inputTwo = "";
	var outputTwo = false;
	
	
	$scope.inputTwo = inputTwo;
	$scope.outputTwo = outputTwo;
});

codeChallengeModule.controller("levelThreeController", function($scope) {
	var inputThree = "";
	var outputThree = false;
	
	
	$scope.inputThree = inputThree;
	$scope.outputThree = outputThree;
});

function reverseString(input){
	
}