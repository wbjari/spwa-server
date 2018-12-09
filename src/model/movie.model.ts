import { Document, Model, model, Schema } from 'mongoose';
import { MovieSchema, IMovieDocument } from './schemas/movie.schema';

export interface IMovieModel extends Model<IMovieDocument> { }

export const Movie: IMovieModel = model<IMovieDocument, IMovieModel>('Movie', MovieSchema);

export default Movie;
