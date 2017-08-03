$(document).ready(function(){
	var sample = angular.module("sample", []);

	sample.controller("emp", ['$scope', function(c){
		c.info = {
			name: "Edgars",
			salary: 4300
		},
		c.type = "Medium"
	}]);
});