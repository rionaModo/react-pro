/**
 * Created by danlu on 2018/1/18.
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var  Schema= mongoose.Schema({name:String});
module.exports = mongoose.model('users',Schema);