angular.module('app', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
  // DO NOT MODIFY CODE ABOVE THIS LINE

  /*  HINT: Make sure your controllers, methods, and variables 
      are named what $routeProvider and the partials are expecting  */

  .factory('counter', function () {
    console.log('zasdasdasdasd')
    var increment = function (number) {
      if (number % 3 === 0 && number % 5 === 0) {
        return "FIZZBUZZ"
      }
      if (number % 3 === 0) {
        return "FIZZ"
      }
      if (number % 5 === 0) {
        return "BUZZ"
      }
      return number;
    }
    return {
      increment: increment
    }
  })
  .controller('fizzbuzzCtrl', function ($scope) {
    console.log('zasdasdasdasd')
    $scope.display = 0;
    $scope.counter = 0;
    $scope.increment = function () {
      $scope.counter++;
      $scope.display = $scope.Counter.increment($scope.counter);
    }
  })
  .controller('fozzbazzCtrl', function () { });
