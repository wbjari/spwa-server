import { Document, Model, model, Schema } from 'mongoose';
import { DeejaySchema, IDeejayDocument } from './schemas/deejay.schema';

export interface ILikeModel extends Model<IDeejayDocument> { }
export const Like: ILikeModel = model<IDeejayDocument, ILikeModel>('Like', DeejaySchema);

export default Like;
