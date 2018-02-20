var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var citibikeSchema = new Schema({
    properties: {
        station_id: {type: String, required: true},
        name: {type: Number, required: true},
        short_name: {type: String, required: true},
        region_id: {type: Number, required: true},
        rental_methods: {},
        capacity: {type: Number, required: true},
        eightd_has_key_dispenser: Boolean,
    },
    geometry: { 
        coordinates: {type: [Number], index: '2dsphere'}
    }
});

var citibike = mongoose.model("citibikes", citibikeSchema);

module.exports = citibike;