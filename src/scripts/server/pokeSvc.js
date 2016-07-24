import pokeScan from 'pokego-scan';

module.exports = {
  getPokemon: (lat, lon, req, res) => {
    let coords = {
      latitude: lat,
      longitude: lon
    }
    console.log(coords);
    // obtain an array of pokemon close to the given coordinates
    pokeScan(coords, function(err, pokemon) {
        console.log("hit API.");
        if (err){
          // throw err;
          res.end(res.writeHead(400, "API down or too many requests. Wait 30 seconds."));
        }
        else {
          res.json(pokemon);
        }
    });
  }
};
