import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectDb = async () => {
    if(cached.conn)return cached.conn;
    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGODB_URI || '').then((mongoose)=>mongoose);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}