const mongoose=require ('mongoose');

const userSchema = new mongoose.Schema({
    login:{type: String, required:true},
    password:{type:String,require: true},
});
module.exports=mongoose.model('User', userSchema);