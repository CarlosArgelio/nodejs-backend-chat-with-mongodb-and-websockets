const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
})

const model = mongoose.model('User', userSchema);
module.exports = model
