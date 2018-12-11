import { Document, Schema } from 'mongoose';

export interface IMovieDocument extends Document {
    name: string;
    publisher: string;
    genre: string;
    description: string;
    imagePath: string;
}

export const MovieSchema: Schema = new Schema({
    name: String,
    publisher: String,
    genre: String,
    description: String,
    imagePath: String
});
