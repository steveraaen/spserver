var citibike = require("../models/Bikes.js");
/*var testsigns = require("../models/Testsigns.js");
var places = require("../models/Place.js");*/
const moment = require('moment')

module.exports = function(app) {



    app.get("/bikes", function(req, res) {

        citibike.find({}, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(res)
                /*res.json(res);*/
            }
        }).limit(2000);
    });
}
