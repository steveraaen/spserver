var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var meterSchema = new Schema({
	properties: {
		point_y: {type: String, required: true},
		point_x: {type: String, required: true},
		meter_type: {type: String, required: true},
		status: {type: String, required: true},
		meter_no: {type: String, required: true}

	},
	geometry: { 
		coordinates: {type: [Number], index: '2dsphere'}
	}
});

var meters = mongoose.model("meters", meterSchema);

module.exports = meters;