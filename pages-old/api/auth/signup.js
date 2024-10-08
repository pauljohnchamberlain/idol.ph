import User from "@/model/User";
import connectDB from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    if (req.method === 'POST' && req.headers.authorization) {
        const base64Credentials = req.headers.authorization?.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        if (credentials === process.env.USER_ID + ":" + process.env.PASSWORD) {
            const { name, email,password,role,username } = req.body;
            let user = await User.findOne({ email: email });
            if (user) {
                res.status(400).json({ success: false, error: 'User already exists' });
            } else {
                if (!name || !email || !password || !role||!username) {
                    res.status(400).json({ success: false, error: 'Please fill all the fields' });
                } else if (password.length < 1) {
                    res.status(400).json({ success: false, error: 'Password must be at least 8 characters long' });
                } else if (password.length > 1) {
                try {                    
                    let useName = await User.findOne({ username: username });
                    if (useName) {
                        res.status(400).json({ success: false, error: 'Username already exists' });
                    }
                    let u = new User({ name, email,username, password: CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString(),role });
                    await u.save();
                    let token = jwt.sign({ name: name, email: email,role:role,username:username }, process.env.JWT_SECRET, { expiresIn: '28d' });
                    res.status(200).json({ success: true, message: 'Account Created successfully Now you can login', token: token,role:role,email:email, name:name });
                } catch (error) {
                    res.status(200).json({ success: false, error});
                }
                }
            }
        } else {
            res.status(200).json({ message: "Hello bhai padhai karlo" });
        }
    }
    else {
        res.status(200).json({ message: "Abeyy Padhai likhai karo IAS~YAS Bano" });
    }
}

export default connectDB(signup);
