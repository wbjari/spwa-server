import { Document, Schema } from 'mongoose';

export interface IRatingDocument extends Document {
    user: string;
    value: number;
}

export const RatingSchema: Schema = new Schema({
    user: String,
    value: Number
});
