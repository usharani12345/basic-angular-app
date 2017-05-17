var app= angular.module("myApp",[]);
app.controller("myController",["$scope",function($scope){
	$scope.message="Hello World";
	$scope.username ="john";
	$scope.password="12345";
}])