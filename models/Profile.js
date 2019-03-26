const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: Srting,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  avatar:{
    type: String,
    reuired: true
  },
  social: {
  youtube: {
    type: String
  },
  twitter: {
    type: String
  },
  facebook: {
    type: String
  },
  linkedin: {
    type: String
  },
  instagram: {
    type: String
  }
},
  date:{
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
