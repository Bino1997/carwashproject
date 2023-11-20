import { Schema, Document, Model, model } from 'mongoose';

export interface IUserRequest extends Request {
  user?: any
}
export interface UserReg extends Document {
  phoneNo: Number;
  email: string;
  password: string;
  deleted: boolean;
}

const UserSchema: Schema = new Schema<UserReg>({
  phoneNo: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const UserModel: Model<UserReg> = model<UserReg>('User', UserSchema);

export default UserModel;
