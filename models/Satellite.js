const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SatelliteSchema = new Schema({
  satellite_name: {
    type: String,
    required: true,
    unique: true
  },
  company_name: {
    type: String,
    required: true
  },
  placement_reason: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  released_location: {
    lat: {
      type: String
    },
    long: {
      type: String
    }
  },
  settled_location: {
    lat: {
      type: String
    },
    long: {
      type: String
    }
  },
  orbit_path: {
    type: String
  },
  released_date: {
    type: Date,
    required: true
  },
  expiration_date: {
    type: Date,
    required: true
  },
  mass: {
    type: Number,
    required: true
  },
  health: {
    type: Boolean,
    required: true,
    default: true
  },
  deorbit: {
    type: Boolean,
    required: true,
    default: false
  },
  deorbit_date: {
    type: Date
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Satellite", SatelliteSchema);