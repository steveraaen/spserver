var signs = require("../models/Allsigns.js");
/*var testsigns = require("../models/Testsigns.js");
var places = require("../models/Place.js");*/


module.exports = function(app) {


    app.get("/mon/:coordinates?", function(req, res) {
        var lat = parseFloat(req.query.lat).toFixed(6)
        var lng = parseFloat(req.query.lng).toFixed(6)
        console.log(req.query)
        signs.find({
            "properties.T": /MON/i,
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
        }).limit(750);
    });

/*    app.get("/tue/:coordinates?", function(req, res) {
        var lat = parseFloat(req.query.coordinates[1]).toFixed(6)
        var lng = parseFloat(req.query.coordinates[0]).toFixed(6)
        allsigns.find({
            "properties.T": /TUE/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, lng]
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
        }).limit(20000);
    });
    
    app.get("/wed/:coordinates?", function(req, res) {

        var lat = parseFloat(req.query.coordinates[1]).toFixed(6)
        var lng = parseFloat(req.query.coordinates[0]).toFixed(6)
        
        allsigns.find({
            "properties.T": /WED/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, lng]
                    },
                    $maxDistance: 500 * 1.60934
                }
            }
        }, function(error, doc) {
            if (error) {
             return   console.log(error);
            } else {
                
               res.json(doc);
            }
        }).limit(1000)        
    });
 
    app.get("/thu/:coordinates?", function(req, res) {
        var lat = parseFloat(req.query.coordinates[1]).toFixed(6)
        var lng = parseFloat(req.query.coordinates[0]).toFixed(6)
        testsigns.find({
            "properties.T": /THU/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, lng]
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
        }).limit(1000);
    });
   
    app.get("/fri/:coordinates?", function(req, res) {
        var lat = parseFloat(req.query.coordinates[1]).toFixed(6)
        var lng = parseFloat(req.query.coordinates[0]).toFixed(6)
        testsigns.find({
            "properties.T": /FRI/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, lng]
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
        }).limit(3000);
    });
    
    app.get("/sat/:coordinates?", function(req, res) {
        var lat = parseFloat(req.query.coordinates[1]).toFixed(6)
        var lng = parseFloat(req.query.coordinates[0]).toFixed(6)
        testsigns.find({
            "properties.T": /SAT/i,
            geometry: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [lat, lng]
                    },
                    $maxDistance: 500 * 1.60934
                }
            }
        }, function(error, doc) {
            if (error) {
                console.log('WTF!:::'+ error);
            } else {
            
                res.json(doc);
            }
        }).limit(700);
    });
*/
}