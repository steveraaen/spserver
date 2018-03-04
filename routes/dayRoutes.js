var signs = require("../models/Allsigns.js");
var meters = require("../models/Meters.js");
/*var places = require("../models/Place.js");*/
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
                    $maxDistance: 500 * 1.60934
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {             
                res.json(doc);
            }
        }).limit(1500);
});
    app.get("/api/meters?", function(req, res) {
        console.log(req.query)
        var lat = parseFloat(req.query.coordinates[1]).toFixed(6)
        var lng = parseFloat(req.query.coordinates[0]).toFixed(6)
        meters.find({
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lng, lat]
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
        }).limit(1500);        
    })

    app.get("/mycar/:coordinates?", function(req, res) {
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
                    $maxDistance: 1000
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log(error);
            } else {             
                res.json(doc);
            }
        }).limit(10);
});
   


 const endpoint = app.get("/test", function(req, res) {
        signs.find({
           /* "properties.T": rte,*/
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [-73.9839440, 40.6766600 ]
                    },
                    $maxDistance: 1000
                }
            }
        })
    })
    const middleWare = async (req, res, next) => {
    const data = await middleWareZ(endpoint)
    req.data = data.json()
    next()
    }
}













