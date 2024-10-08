const mongoose = require('mongoose');

const CreatorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    role: { type: String,required:true ,default:"creator"},
    phone:{type:String,default:""},
    profileImage:{type: String,default:""},
    city:{type:String,default:""},
    state:{type:String,default:""},

    category:{type:String,default:""},
    platforms:{type:Array,default:[]},
    bannerImage:{type: String,default:""},
    achievments:{type:Array,default:[]},
    description:{type:String,default:""},
    packages:{type:Array,default:[]},
    rating:{type:Number,default:0},
    reviews:{type:Array,default:[]},
    sample:{type:Array,default:[]},
}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('Creator', CreatorSchema);