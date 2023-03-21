//STEP 1 import Mongoose
const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');


//STEP 2: import our Schema constant
const Schema = mongoose.Schema;

//STEP 3: now we want to create the User Schema
//This object will contain all properties that our new user will need
const userSchema = new Schema(
    {
        name: {type: String, required: true},

        //NOTE: if we have a large database, we may want to make sure EMAIL 
        //field is queried as fast as possible 
        //add a UNIQUE property will create an INDEX for this email (will speed up search process)
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true, minLength: 6},
        image: {type: String, required: true},
        
        //one user may have multiple places 
        places: { type: String ,required: true}

    }
)

//STEP 4: notice that UNIQUE will create indexing, but will not validate uniquenss
//need to use "uniqueValidator" and add to our schema 
//Summary:to allow us to query EMAIL as fast as possible with UNIQUE
//AND we can only create an Email if email does not exist
userSchema.plugin(uniqueValidator); 


//STEP 5: creaet and export our Model 
module.exports = mongoose.model('User', userSchema);

