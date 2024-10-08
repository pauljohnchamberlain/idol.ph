const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String,required:true },
}, { timestamps: true });
mongoose.models = {};

export default mongoose.model('User', UserSchema);