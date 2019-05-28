const mongoose=require('mongoose');
const Schema = mongoose.Schema;
let UserSchema=mongoose.Schema({
    name:{type:String,
    required:true},
    contact:{type:Number,
    require:true},
    email:{type:String,
    require:true},
    image:{type:String,require:true},
});
module.exports=mongoose.model('User',UserSchema);