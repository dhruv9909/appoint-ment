import mongoose, { models } from "mongoose";

const CustomerSchema = new mongoose.Schema({
    name : {type: String, required: true},
    password : {type: String, required: true},
    phone : {type: String, required: true},
})

const Customer = models.customer || mongoose.model("customer", CustomerSchema);

export default Customer;
