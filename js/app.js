
/*var app = angular.module('LoginAngular', ['angularSpinner']);


app.controller('controlLogin', function($scope,usSpinnerService,$rootScope) {

    $scope.usuario={};
    $scope.usuario.email = "fede@fede.com";
    $scope.usuario.password = "federico";
    $scope.spinneractive = false;

    $scope.Login=function(){

    	console.log("login a retener:");
    	console.log($scope.usuario);
        usSpinnerService.spin('spinner-1'); 
        $scope.spinneractive = true;
        if  (( $scope.usuario.email == "fede@fede.com" &&
    		$scope.usuario.password == "federico") ||
    		( $scope.usuario.email == "cwitt@cwitt.com" &&
    		$scope.usuario.password == "123456" ))
		 usSpinnerService.stop('spinner-1');	   	  
	  }

});*/

var app = angular.module('LoginAngular',[]);


app.controller('controlLogin', function($scope) {

    $scope.usuario={};
    $scope.usuario.email = "fede@fede.com";
    $scope.usuario.password = "federico";
    $scope.spinneractive = false;

    $scope.Login=function(){

    	console.log("login a retener:");
    	console.log($scope.usuario);
    }

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