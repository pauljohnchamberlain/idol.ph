const mongoose = require('mongoose');

const CollaborationsSchema = new mongoose.Schema({

    reviewToEmail: { type: String,required:true },
    reviewToFrom: { type: String,required:true },
    title:{type:String,required:true},
    description:{type:String,required:true},
    rating:{type:Number,required:true},
    image:{type:String,required:true},
    date:{type:Date,required:true,default:new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})},
}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('Collaborations', CollaborationsSchema);