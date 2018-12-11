import { Document, Schema } from 'mongoose';
import { IMovieDocument, MovieSchema } from './movie.schema';

export interface IPublisherDocument extends Document {
    name: string;
    publisher: string;
    imagePath: string;
    movies: [IMovieDocument];
}

export const PublisherSchema: Schema = new Schema({
    name: String,
    publisher: String,
    movies: [MovieSchema]
});
