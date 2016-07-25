angular.module('pokeradar')
	.service('masterSvc', function ($http, $q) {

		this.getGeo = () => {

			let deferred = $q.defer();

			const success = (position) => {
				deferred.resolve(position);
			}
			console.log("Hit getPokemon function on service.");
			if ("geolocation" in navigator) {
				navigator.geolocation.getCurrentPosition((position) => {
					console.log(position);
					success(position);
				}, (error) => {
					console.log("Geolocation error: ", error);
				});
				// , {timeout:10000, enableHighAccuracy: true}
			} else {
				/* geolocation IS NOT available */
				console.log("Geolocation is not available on your browser.");
			}
			return deferred.promise;
		};

		this.getPokemon = (position) => {
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;
			return $http({
			  method: 'GET',
			  url: 'http://127.0.0.1:9001/pokemon/@' + lat + ',' + lon
			});
		};
	});
