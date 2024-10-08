import User from "@/model/User";
import connectDB from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const login = async (req, res) => {
    if (req.method === 'POST' && req.headers.authorization) {
        const base64Credentials = req.headers.authorization?.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        if (credentials === process.env.USER_ID + ":" + process.env.PASSWORD) {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
                let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
                if (req.body.email === user.email && req.body.password === decryptedPassword) {
                    let token = jwt.sign({ name: user.name, email: user.email ,role:user.role}, process.env.JWT_SECRET, { expiresIn: '28d' });
                    res.status(200).json({ success: true, token: token, message: 'Login Successful' ,role:user.role,email:user.email});
                }
                else {
                    res.status(200).json({ success: false, error: 'Invalid credentials' });
                }
            }
            else {
                res.status(400).json({ success: false, error: 'Invalid credentials' });
            }
        } else {
            res.status(200).json({ message: "Hello bhai padhai karlo" });
        }
    }
    else {
        res.status(200).json({ message: "Abeyy Padhai likhai karo IAS~YAS Bano" });
    }
}

export default connectDB(login);
