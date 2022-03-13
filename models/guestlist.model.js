const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
    id:{type:String,unique:true},
    name:{type:String,required:true},
    relationSide:{type:Number,required:true},
    isAFamily:{type:Boolean,required:true},
    expectedExtras:{type:Number,required:true},
},{
    timestamps:true
});

const guest = mongoose.model('Guest',userSchema);

module.exports = guest;