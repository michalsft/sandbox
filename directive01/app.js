angular.module('plunker', []);

function MainCtrl($scope) {
  $scope.name = 'World';
}


angular.module('plunker').directive('reverse', function(){
 
  return {
    // restrict to an element (A = attribute, C = class, M = comment)
    // or any combination like 'EACM' or 'EC'
    restrict: 'E',
    scope: {
      name: '='
    },
   
    templateUrl: 'reverse_template.html',
    
    controller: function($scope) {
      $scope.reverseName = function(){
        $scope.name = $scope.name.split('').reverse().join('');
      };
    },
    
    replace: true, //replace the directive element with the output of the template.
    //the link method does the work of setting the directive
    // up, things like bindings, jquery calls, etc are done in here
    link: function(scope, elem, attr) {
      // scope is the directive's scope,
      // elem is a jquery lite (or jquery full) object for the directive root element.
      // attr is a dictionary of attributes on the directive element.
      elem.bind('dblclick', function() {
        scope.name += '!';
        scope.$apply();
      });
    }
  };
});