var signs = require("../models/Allsigns.js");
/*var testsigns = require("../models/Testsigns.js");
var places = require("../models/Place.js");*/
const moment = require('moment')

module.exports = function(app) {

    app.get("/mon/:coordinates?", function(req, res) {
        console.log(req.query)
        if(req.query.day) {
          var today = req.query.day  
        } else {
    var today = moment().format("dddd").toUpperCase()            
        }

        
        var d = today.substring(0, 3)
        var lat = parseFloat(req.query.coordinates[1]).toFixed(6)
        var lng = parseFloat(req.query.coordinates[0]).toFixed(6)
       
        var rte = new RegExp(".*^" + d + ".*")
        signs.find({
           /* "properties.T": rte,*/
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lng, lat ]
                    },
                    $maxDistance: 800 * 1.60934
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {
             
                res.json(doc);
            }
        }).limit(3500);
    });

}
