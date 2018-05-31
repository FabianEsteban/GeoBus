(function () {
    var myAngular = angular.module("myApp", []);

    myAngular.controller("ctrIndex", function ($scope, $rootScope) {
        console.log("hola fabian");
        /*$scope.obtenerLocalizacion = function () {
         if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function (position) {
         $scope.$apply(function () {
         $scope.position = position; //Obtenemos info de la localizaicon
         });
         });
         }
         };
         */
    });
})();