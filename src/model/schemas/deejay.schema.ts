import { Document, Schema } from 'mongoose';

export interface IDeejayDocument extends Document {
    name: string;
    age: number;
    description: string;
    imagePath: string;
}

export const DeejaySchema: Schema = new Schema({
    name: String,
    age: Number,
    description: String,
    imagePath: String
});
