var Pokemon= angular.module("Pokemon", [])

Pokemon.controller("pokedex", function($scope,$rootScope,$http){
$http({
	method: "GET",
	url:"https://pokeapi.co/api/v2/pokemon/25/"
	}).then(function callbackSuccess(y){
		console.log(y);
	})
})