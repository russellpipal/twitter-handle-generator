var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wordSchema = new Schema({
  id: String,
  words: [],
});

var RandomHandle = mongoose.model('RandomHandle', wordSchema);

module.exports = RandomHandle;
