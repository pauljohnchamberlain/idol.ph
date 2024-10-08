const mongoose = require('mongoose');

const CollaborationsSchema = new mongoose.Schema({
  brand: { type: String, required: true },
    creator: { type: String, required: true },
    status: { type: String,required:true },
    description:{type:String,required:true},
    budget:{type:Number,required:true},
    workResult:{type:String,required:true},
    dealDate:{type:Date,required:true,default:new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})},
}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('Collaborations', CollaborationsSchema);