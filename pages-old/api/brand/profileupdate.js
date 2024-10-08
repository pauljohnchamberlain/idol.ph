import Brand from "@/model/Brand";
import connectDB from "@/middleware/mongoose";


const login = async (req, res) => {
    if (req.method === 'POST' && req.headers.authorization) {
        const base64Credentials = req.headers.authorization?.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        if (credentials === process.env.USER_ID + ":" + process.env.PASSWORD) {
            try {
                const brand = await Brand.findOne({ email: req.body.email });
                if (brand) {
                    brand.name = req.body.name;
                    brand.email = req.body.email;
                    brand.role = "brand";
                    brand.profileImage = req.body.profileImage?req.body.profileImage:brand.profileImage;
                    brand.category = req.body.category?req.body.category:brand.category;
                    brand.location = req.body.location?req.body.location:brand.location;
                    brand.description = req.body.description?req.body.description:brand.description;
                    await brand.save();
                    res.status(200).json({ success: true, message: "Brand Updated" });
                    return;
                }else{
                    await Brand.create({
                        name: req.body.name,
                        email: req.body.email,
                        role: "brand",
                    });
                    res.status(200).json({ success: true, message: "Brand Added" });

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
