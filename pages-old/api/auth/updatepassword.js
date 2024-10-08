import User from "@/model/User";
import connectDB from "@/middleware/mongoose";
var CryptoJS = require("crypto-js");

const login = async (req, res) => {
    if (req.method === 'POST' && req.headers.authorization) {
        const base64Credentials = req.headers.authorization?.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        if (credentials === process.env.USER_ID + ":" + process.env.PASSWORD) {
            const { password, cpassword, token } = req.body;
            if (password === cpassword) {
                let decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
                let user = await User.findOne({ email: decoded.email });
                if (user) {
                    let encryptedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
                    let dbuser = await User.findOneAndUpdate({ email: decoded.email }, { password: encryptedPassword });
                    dbuser.save();
                    res.status(200).json({ success: true, message: 'Password Updated Successfully' });
                }
            }
            else {
                res.status(200).json({ success: false, message: 'Password and Confirm Password are not same' });
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
