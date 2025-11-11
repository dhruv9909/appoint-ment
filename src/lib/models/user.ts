import mongoose, { Document } from "mongoose";

interface IUser extends Document {
  email?: string;
  phone?: string;
  role: string;
  password: string;
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        validate: {
            validator: function(this:IUser,v:string){
                return v || this.phone;
            },
            message: "Either email or phone number is required",
        },
    },
    phone: {
        type: String,
        validate: {
            validator: function(this:IUser, v:string){
                return v || this.email;
            },
            message: "Either email or phone number is required"
        }
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;