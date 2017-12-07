import { Document, Model, model, Schema } from 'mongoose';
import { GenreSchema, IGenreDocument } from './schemas/genre.schema';

export interface IGenreModel extends Model<IGenreDocument> { }

export const Genre: IGenreModel = model<IGenreDocument, IGenreModel>('Genre', GenreSchema);

export default Genre;
