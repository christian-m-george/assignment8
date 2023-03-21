//STEP 1 import mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//STEP 2 - to create the Schema
//instantiate our schema and create a new JS object
//this object now contains the logic for our bluepritn of a later document
//NOTE: how this relates to the DUMMY_DATA in places-controller.JS
//NOTE: that the ID property will be created by MongoDB unliked our Dummy Data
const placeSchema = Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, reqired: true },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    creator: { type: String, required: true }
});

//STEP 3 - to create the Model 
//first argument is the name of the model (convention Uppercase fist char and singular form)
//second argument is the schea we want to refer to 
module.exports = mongoose.model('Place', placeSchema);

