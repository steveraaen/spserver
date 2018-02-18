var signs = require("../models/Allsigns.js");
/*var testsigns = require("../models/Testsigns.js");
var places = require("../models/Place.js");*/
const moment = require('moment')

module.exports = function(app) {
var today = moment().format("dddd").toUpperCase()
var m = "MON"
var d = today.substring(0, 3)
var rte = new RegExp(".*^" + "MON" + ".*")
console.log(rte)
    app.get("/mon/:coordinates?", function(req, res) {
        var lat = parseFloat(req.query.lat).toFixed(6)
        var lng = parseFloat(req.query.lng).toFixed(6)
        console.log(req.query)
        signs.find({
            
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lng, lat ]
                    },
                    $maxDistance: 500 * 1.60934
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
             
                res.json(doc);
            }
        }).limit(10000);
    });
}