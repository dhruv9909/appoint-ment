import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'business', required: true },
    customerName: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    status: { type: String, enum: ['scheduled', 'completed', 'canceled'], default: 'scheduled' },
});
const Appointment = mongoose.models.appointment || mongoose.model('appointment', appointmentSchema);
export default Appointment;