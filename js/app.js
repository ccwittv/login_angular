
var app = angular.module('LoginAngular', []);


app.controller('controlLogin', function($scope) {

    $scope.usuario={};
    $scope.usuario.email = "fede@fede.com";
    $scope.usuario.password = "federico";

});

app.controller('controlAlta', function($scope) {

    $scope.usuario={};
	$scope.usuario.nombre = "Juan";
	$scope.usuario.apellido = "Gonzalez";
	$scope.usuario.edad = "38";
	$scope.usuario.sexo = "Masculino";
	$scope.usuario.dni = "154";
	$scope.usuario.estado = "opcion1";
	$scope.usuario.fechaNacimiento = "1978-11-07";
	$scope.usuario.email = "juan@juan.com";
	$scope.usuario.password = "contrasena";
	$scope.usuario.copiapassword = "contrasena";
	$scope.usuario.lenguaje = "Javascript";

});