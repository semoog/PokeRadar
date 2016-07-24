angular.module('pokeradar')
	.service('masterSvc', function ($http) {

		this.getPokemon = () => {

			const success = (lat, lon) => {
				// return $http({
				//   method: 'GET',
				//   url: 'http://127.0.0.1:9001/pokemon/@' + lat + ',' + lon
				// });
			}
			console.log("Hit getPokemon function on service.");
			if ("geolocation" in navigator) {
				navigator.geolocation.getCurrentPosition((position) => {
					console.log(position);
					success(position.coords.latitude, position.coords.longitude);
				}, (error) => {
					console.log("Geolocation error: ", error);
				});
				// , {timeout:10000, enableHighAccuracy: true}
			} else {
				/* geolocation IS NOT available */
				console.log("Geolocation is not available on your browser.");
			}
		};
	});
