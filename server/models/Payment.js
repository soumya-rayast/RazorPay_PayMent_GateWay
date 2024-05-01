import mongoose, { Schema, model } from "mongoose";
const { schema } = mongoose;

const PaymentSchema = new Schema({
    razorpay_order_id: {
        type: String,
        required: true,
    },
    razorpay_payment_id: {
        type: String,
        required: true,
    },
    razorpay_signature: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: Date.now
    }
})
export default model('payment', PaymentSchema);