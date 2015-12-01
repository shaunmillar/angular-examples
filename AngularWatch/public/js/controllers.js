var myApp = angular.module('myApp');
 
myApp.controller('DoubleController', ['$scope', function MyCtrl($scope) {
  $scope.name = "";

  $scope.$watch("name", function(newValue, oldValue) {
    if ($scope.name.length > 0) {
	  console.log('Name changed to ' + $scope.name);
      $scope.greeting = "Greetings " + $scope.name;
    }
  });
}]);
