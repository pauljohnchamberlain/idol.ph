const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String,required:true ,default:"brand"},
    profileImage:{type: String,default:""},
    category:{type:Array,default:[]},
    location:{type:String,default:""},
    description:{type:String,default:""},
    rating:{type:Number,default:0},
    reviews:{type:Array,default:[]},
}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('Brand', BrandSchema);