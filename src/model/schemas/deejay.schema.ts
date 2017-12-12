import { Document, Schema } from 'mongoose';
import { IGenreDocument, GenreSchema } from './genre.schema';

export interface IDeejayDocument extends Document {
    name: string;
    age: number;
    description: string;
    imagePath: string;
    genres: [IGenreDocument];
}

export const DeejaySchema: Schema = new Schema({
    name: String,
    age: Number,
    description: String,
    imagePath: String,
    genres: [GenreSchema]
});
