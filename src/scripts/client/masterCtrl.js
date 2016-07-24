angular.module('pokeradar')
  .controller('masterCtrl', function ($scope, masterSvc) {
    $scope.getPokemon = () => {
      masterSvc.getPokemon();
      // .then(response => {
      //   console.log(response);
      //   if (response.data) {
      //     $scope.pokemons = response.data;
      //   }
      // });
    };
  });
