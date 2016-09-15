
var app = angular.module('LoginAngular', ['angularSpinners']);


app.controller('controlLogin', function($scope, $timeout, spinnerService) {

    $scope.usuario={};
    $scope.usuario.email = "fede@fede.com";
    $scope.usuario.password = "federico";

    $scope.Login= function () {
      console.log("login a retener:");
      console.log($scope.usuario);
      spinnerService.show('html5spinner');
       if  (( $scope.usuario.email == "fede@fede.com" &&
            $scope.usuario.password == "federico") ||
            ( $scope.usuario.email == "cwitt@cwitt.com" &&
            $scope.usuario.password == "1234567" ))
         {
            $timeout(function () {
            spinnerService.hide('html5spinner');
            $scope.loggedIn = true;}, 2500);
         }
        else
         {
            $timeout(function () {
            spinnerService.hide('html5spinner');
            $scope.loggedIncorrecto = true;}, 2500);
         }             
    };
  });

app.controller('controlAlta', function($scope) {

  $scope.usuario={};
	$scope.usuario.nombre = "Juan";
	$scope.usuario.apellido = "Gonzalez";
	$scope.usuario.edad = 38;
	$scope.usuario.sexo = "Masculino";
	$scope.usuario.dni = 23444444;
	$scope.usuario.estado = "opcion1";
	$scope.usuario.fechaNacimiento = new Date("1999-03-25");
	$scope.usuario.email = "juan@juan.com";
	$scope.usuario.password = "contrasena";
	$scope.usuario.copiapassword = "contrasena";
    
	$scope.Registrar=function(){

    	console.log("usuario a crear:");
    	console.log($scope.usuario);
     	   	  
	  }

});