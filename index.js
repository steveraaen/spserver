// mongoimport -h ds131003-a0.mlab.com:31003 -d prodparking -c signs -u steve -p modernWater360 --file signs.js
// mongoexport -h ds239128.mlab.com:39128 -d heroku_d7twbhf6 -c meters -u steve -p modernWater360 -o meters.json
// mongoimport -h ds131003-a0.mlab.com:31003 -d prodparking -c meters -u steve -p modernWater360 --file meters.json
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird')
const bodyParser = require('body-parser')
const moment = require('moment')
const app = express();
const mlabURI = require("./keepLocal.js")

// ------ Setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// ------ Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
/*require("./routes/place-routes.js")(app);
require("./routes/load-routes.js")(app);*/
require("./routes/bikeRoute.js")(app);
require("./routes/dayRoutes.js")(app);
/*mongoose.connect('mongodb://heroku_d7twbhf6:9jg0930vc9jekacdne62v6d5sk@ds239128.mlab.com:39128/heroku_d7twbhf6', {
*/mongoose.connect(mlabURI, {
 
}).then(function() {
	console.log('Mongo connected via mongoose')
})





const port = process.env.PORT || 5001;
app.listen(port);
console.log(`Listening on ${port}`);