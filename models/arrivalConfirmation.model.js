const mongoose = require('mongoose');

const schema = mongoose.Schema;

const arrConf = new schema({
    id:{type:String,required:true,unique:true},
    idGuest:{type:String,required:true,unique:true},
    willArrived:{type:Boolean,required:true},
    numberOfExtras:{type:Number,required:true,},
    msg:{type:String},
},{
    timestamps:true
});

const arr = mongoose.model('RSVP',arrConf);

module.exports = arr;