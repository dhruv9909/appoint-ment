import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({
    ownerName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    businessName: { type: String, required: true },
    category: { type: String, required: true },
    openingHours: { type: String, required: true },
    closingHours: { type: String, required: true },
});

const Business = mongoose.models.business || mongoose.model("business", BusinessSchema);
export default Business;