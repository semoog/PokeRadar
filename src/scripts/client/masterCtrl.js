angular.module('pokeradar')
  .controller('masterCtrl', function ($scope, masterSvc) {

    $scope.map = { center: { latitude: 40, longitude: -111 }, zoom: 8 };

    $scope.pokemonTest = [{
      id: 1495416,
      image: "https://ugc.pokevision.com/images/pokemon/63.png",
      latitude: 40.22592232099,
      longitude: -111.66043644012,
      name: "Abra"
    },
    {
      id: 1495416,
      image: "https://ugc.pokevision.com/images/pokemon/63.png",
      latitude: 40.22592232099,
      longitude: -111.66043644012,
      name: "Abra"
    }]

    $scope.getGeo = () => {
      masterSvc.getGeo()
      .then(response => {
        $scope.coords = response.coords;
        $scope.map = { center: { latitude: $scope.coords.latitude, longitude: $scope.coords.longitude }, zoom: 15 };
        $scope.getPokemon();
      });
    }

    $scope.getPokemon = () => {
      if ($scope.coords) {
        masterSvc.getPokemon($scope.coords).then(response => {
          console.log("Pokemon: ", response);
          if (response.data) {
            $scope.pokemons = response.data;
          }
        });
      }
      else {
        console.log("Coords not set.");
      }
    };

    $scope.getGeo();
  });
