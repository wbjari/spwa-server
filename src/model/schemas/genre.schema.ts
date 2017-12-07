import { Document, Schema } from 'mongoose';
import { IDeejayDocument, DeejaySchema } from './deejay.schema';

export interface IGenreDocument extends Document {
    name: string;
    description: string;
    deejays: [IDeejayDocument];
}

export const GenreSchema: Schema = new Schema({
    name: String,
    description: String,
    deejays: [DeejaySchema]
});
