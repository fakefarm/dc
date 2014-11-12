var app = angular.module('dc', []);

app.directive('greeting', function() {
  return {
    restrict: 'EA',
    template: "<h1>good bye moon!</h1>"
  };
});

app.directive('batman', function(){
  return {
    restrict: 'EA',
    template: "<div> <h1>Pick a year</h1> <input type='text' ng-model='batman.year'> <img ng-show='batman.year' ng-src='./images/{{batman.year}}.png'> </div>"
  };
});
