import User from "../../../model/User";
import connectDB from "../../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const login = async (req, res) => {
    if (req.method === 'POST' && req.headers.authorization) {
        const base64Credentials = req.headers.authorization?.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        if (credentials === process.env.USER_ID + ":" + process.env.PASSWORD) {
            let token = req.body.token;
            try {
                const user = jwt.verify(token, process.env.JWT_SECRET);
                const dbuser = await User.findOne({ email: user.email }, { name: 1,role:1,email:1 });
                // console.log(dbuser);
                if (dbuser) {
                    res.status(200).json({ success: true, user: dbuser });
                    return;
                }

                res.status(200).json({ success: false, user: null });
            } catch (err) {
                res.status(200).json({ success: false, error: 'Invalid token' });
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
