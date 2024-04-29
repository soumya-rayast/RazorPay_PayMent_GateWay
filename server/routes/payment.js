import express from "express"
import Razorpay from "razorpay"
// import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config.js';
import crypto from "crypto"
const router = express.Router();

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, // Replace 'YOUR_RAZORPAY_KEY_ID' with your actual Razorpay key ID
    key_secret: process.env.RAZORPAY_SECRET
});


// Change after completing 

// const key_id = uuidv4()
// const razorpayInstance = new Razorpay(router, {
//     key_id,
//     key_secret: process.env.RAZORPAY_SECRET
// })

// Router 1 : Create order Api using POSt Method 

router.post('./order', (req, res) => {
    const { amount } = req.body;
    try {
        const options = {
            amount: Number(amount * 100),
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        }
        razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: 'Something went Wrong' })
            }
            console.log(order);
            res.status(200).json({
                data: order
            })
        })
    } catch (error) {
        console.log(error)
    }
})
export default router;