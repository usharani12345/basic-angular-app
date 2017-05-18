var app = angular.module("myApp",['ngRoute']);
app.config(["$locationProvider",function($locationProvider){
	$locationProvider.hashPrefix('');
}])
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"index.html",
		controller:"myHomeController"
	})
	.when("/register",{
		templateUrl:"Register.html",
		controller:"myRegisterController"
	})
	.when("/login",{
		templateUrl:"Login.html",
		controller:"myLoginController"
	})
}])

app.run([function(){
	
}])

app.controller("myHomeController",["$scope",function($scope){
	$scope.message1="inside Home controller";
}])

app.controller("myRegisterController",["$scope",function($scope){
	$scope.name="usha";
}])
app.controller("myLoginController",["$scope",function($scope){
	$scope.message3="inside login controller";
}])