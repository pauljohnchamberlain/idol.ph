import Creator from "@/model/Creator";
import connectDB from "@/middleware/mongoose";


const login = async (req, res) => {
    if (req.method === 'POST' && req.headers.authorization) {
        const base64Credentials = req.headers.authorization?.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        if (credentials === process.env.USER_ID + ":" + process.env.PASSWORD) {
            try {
                const creator = await Creator.findOne({ email: req.body.email });
                if (creator) {
                    creator.category = req.body.category,
                    creator.description= req.body.description,
                    creator.platforms=req.body.platforms
                    await creator.save();
                    res.status(200).json({ success: true, message: "Content Info Updated" });
                    return;
                }else{
                 
                    res.status(400).json({ success: false, message: "Creator not exit" });

                }

            } catch (err) {
                res.status(200).json({ success: false, message: 'Invalid request' });
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
