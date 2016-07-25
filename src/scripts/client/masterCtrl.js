angular.module('pokeradar')
  .controller('masterCtrl', function ($scope, masterSvc) {
    $scope.getPokemon = () => {
      masterSvc.getGeo()
      .then(response => {
        masterSvc.getPokemon(response).then(response => {
          console.log(response);
          if (response.data) {
            $scope.pokemons = response.data;
          }
        });
      });
    };
  });
