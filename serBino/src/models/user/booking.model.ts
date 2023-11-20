

// import  { Schema, Document, Model, model } from 'mongoose';

// export interface sample extends Document {
//   date: Date;
//   priceValue: number;
//   location: string;
// }

// const userSchema = new Schema<sample>({
//   date: { type: Date, default: Date.now },
//   priceValue: { type: Number, required: true },
//   location: { type: String, required: true },
// });

// const BookingModel: Model<sample> = model<sample>('User', userSchema);


// export default BookingModel;
// booking.model.ts

import { Schema, Document, Model, model } from 'mongoose';

export interface IUser extends Document {
  date: Date;
  priceValue: number;
  location: string;
  phoneNumber : number
}

const userSchema = new Schema<IUser>({
  date: { type: Date, default: Date.now },
  priceValue: { type: Number, required: true },
  location: { type: String, required: true },
  phoneNumber:{ type: Number, required: true },
});

const BookingModel: Model<IUser> = model<IUser>('Booking', userSchema);

export default BookingModel;
