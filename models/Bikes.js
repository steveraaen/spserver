var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var citibikeSchema = new Schema({
    properties: {
        id:  {type: String, required: true},
        stationName:  {type: String, required: true},
        availableDocks: {type: Number, required: true},
        statusValue: {type: String, required: true},
        statusKey: {type: String, required: true},
        availableBikes: {type: Number, required: true},
        stAddress1: {type: String, required: true},
        lastCommunicationTime: {type: String, required: true},
    },
    geometry: { 
        coordinates: {type: [Number], index: '2dsphere'}
    }
});

var citibike = mongoose.model("citibike", citibikeSchema);

module.exports = citibike;



