
import mongoose, { Document, Model, Schema } from 'mongoose';
 
export interface ServiceDoc extends Document {
  serviceName: string;
  image: string[]; // This field stores the filename of the image
  price:Number;
  location:String;
 
  deleted: boolean;
}
 
const ServiceSchema = new Schema<ServiceDoc>({
  serviceName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
 
  
  deleted: {
    type: Boolean,
    default: false, // Not deleted by default
  },
}, { timestamps: true });
const ServiceModel: Model<ServiceDoc> = mongoose.model('Service', ServiceSchema);
export default ServiceModel;