import { Document, Model, model, Schema } from 'mongoose';
import { PublisherSchema, IPublisherDocument } from './schemas/publisher.schema';

export interface IPublisherModel extends Model<IPublisherDocument> { }

export const Publisher: IPublisherModel = model<IPublisherDocument, IPublisherModel>('Publisher', PublisherSchema);

export default Publisher;
