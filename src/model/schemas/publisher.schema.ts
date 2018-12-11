import { Document, Schema } from 'mongoose';
import { IMovieDocument, MovieSchema } from './movie.schema';

export interface IPublisherDocument extends Document {
    name: string;
    movies: [IMovieDocument];
}

export const PublisherSchema: Schema = new Schema({
    name: String,
    movies: [MovieSchema]
});