// // latestBooking.model.ts

import { Schema, Document, Model, model } from 'mongoose';

export interface ISample extends Document {
  date: Date;
  priceValue: number;
  location: string;
}

const userSchema = new Schema<ISample>({
  date: { type: Date, default: Date.now },
  priceValue: { type: Number, required: true },
  location: { type: String, required: true },
});

const LatestBookingModel: Model<ISample> = model<ISample>('LatestBooking', userSchema);

export default LatestBookingModel;
