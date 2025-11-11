import mongoose, { models } from "mongoose";

const CustomerSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
})

const Customer = models.customer || mongoose.model("customer", CustomerSchema);

export default Customer;
