import { Document, Schema } from 'mongoose';

export interface IGenreDocument extends Document {
    name: string;
    description: string;
}

export const GenreSchema: Schema = new Schema({
    name: String,
    description: String
});
