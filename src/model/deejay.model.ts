import { Document, Model, model, Schema } from 'mongoose';
import { DeejaySchema, IDeejayDocument } from './schemas/deejay.schema';

export interface IDeejayModel extends Model<IDeejayDocument> { }

export const Deejay: IDeejayModel = model<IDeejayDocument, IDeejayModel>('Deejay', DeejaySchema);

export default Deejay;
