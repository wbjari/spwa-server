import { Document, Schema } from 'mongoose';
import { IRatingDocument, RatingSchema } from './rating.schema';

export interface IMovieDocument extends Document {
    name: string;
    publisher: string;
    genre: string;
    description: string;
    imagePath: string;
    ratings: [IRatingDocument];
}

export const MovieSchema: Schema = new Schema({
    name: String,
    publisher: String,
    genre: String,
    description: String,
    imagePath: String,
    ratings: [RatingSchema]
});
