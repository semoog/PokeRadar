import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import session from 'express-session';
import util from 'util';
import pokeSvc from './pokeSvc';
// import config from './config';

//App Init
const app = express();
const port = 3000;

//Middleware
app.use(bodyParser.json());
var corsOptions = {
	origin: 'http://localhost:9001'
}
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/../../../build')); //serve all of our static front-end files from our server.
app.use(session({
	// secret: config.session_secret,
	secret: "pokemans",
	resave: true,
	saveUninitialized: true
}));

// var coords = {
//     latitude: 40.4164737,
//     longitude: -3.7042757
// };

app.get('/pokemon/@:lat,:lon', (req, res) => {
		pokeSvc.getPokemon(req.params.lat, req.params.lon, req, res);
});

//Listen
app.listen(port, () => {
	console.log('Listening on port ', port);
})
