import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ownerName: { type: String, required: true },
    // email: { type: String, unique: true, required: true },
    // phone: { type: String, unique: true, required: true },
    // password: { type: String, required: true },
    businessName: { type: String, required: true },
    category: { type: String, required: true },
    openingHours: { type: String, required: true },
    closingHours: { type: String, required: true },
});

const Business = mongoose.models.business || mongoose.model("business", BusinessSchema);
export default Business;