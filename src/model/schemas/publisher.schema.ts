import { Document, Schema } from 'mongoose';

export interface IPublisherDocument extends Document {
    name: string;
    publisher: string;
    imagePath: string;
}

export const PublisherSchema: Schema = new Schema({
    name: String,
    publisher: String,
    imagePath: String
});
