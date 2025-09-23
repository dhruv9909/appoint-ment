import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
    name : {type: String, required: true},
    password : {type: String, required: true},
    phone : {type: String, required: true},
})

const Customer = mongoose.model("customer", CustomerSchema);

export default Customer;
