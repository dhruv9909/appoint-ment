import mongoose from "mongoose";

const BusinessSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    businessName: { type: String, required: true },
    category: { type: String, required: true },
    openingHours: { type: String, required: true },
    closingHours: { type: String, required: true },
});

const Business = mongoose.models.business || mongoose.model("business", BusinessSchema);
export default Business;