const mongoose = require('mongoose');

const schema = mongoose.Schema;

const arrGuesst = new schema({
    id:{type:String,required:true,unique:true},
    idGuest:{type:String,required:true,unique:true},
    idRSVP:{type:String,required:true,unique:true},
},{
    timestamps:true
});

const arr = mongoose.model('arriving_guest',arrGuesst);

module.exports = arr;