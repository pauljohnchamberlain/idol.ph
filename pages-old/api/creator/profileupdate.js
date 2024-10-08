import Creator from "@/model/Creator";
import connectDB from "@/middleware/mongoose";


const login = async (req, res) => {
    if (req.method === 'POST' && req.headers.authorization) {
        const base64Credentials = req.headers.authorization?.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        if (credentials === process.env.USER_ID + ":" + process.env.PASSWORD) {
            try {
                const creator = await Creator.findOne({ email: req.body.email });
                console.log(creator);
                if (creator) {
                    creator.name=req.body.name,
                    creator.phone=req.body.phone,
                    creator.city=req.body.city,
                    creator.state=req.body.state
                    await creator.save();
                    res.status(200).json({ success: true, message: "Creator Updated" });
                    return;
                }else{
                    await Creator.create({
                        name: req.body.name,
                        email: req.body.email,
                        username: req.body.username,
                        platforms: [
                            {
                              platform: "Instagram",
                              followers: "",
                              profile: "",
                            },
                            {
                              platform: "Youtube",
                              followers: "",
                              profile:""
                            },
                            {
                              platform: "Facebook",
                              followers: "1000",
                              profile:""
                            },
                          ],
                        role: "creator",
                    });
                    res.status(200).json({ success: true, message: "Creator Added" });

                }

            } catch (err) {
                console.log(err);
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
