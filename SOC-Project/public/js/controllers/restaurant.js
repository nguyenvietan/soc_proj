app.controller('Rest1_Controller', ['$scope','$http', function($scope,$http){
console.log("hello");

$scope.dateSel = "";
$scope.timeSel = "";
$scope.showDate = function(){
	console.log($scope.dateSel);	
}
$scope.showTime = function(){
	console.log($scope.timeSel);	
}
$scope.show_people = function(){
	console.log($scope.n_people);	
}



}]);


