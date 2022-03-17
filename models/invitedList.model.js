const mongoose = require('mongoose');

const schema = mongoose.Schema;

const dataScheme = new schema({
    id:{type:String,unique:true},
    idGuest:{type:String,required:true,unique:true},
},{
    timestamps:true
});

const listModel = mongoose.model('hasInvited',dataScheme);

module.exports = listModel;


