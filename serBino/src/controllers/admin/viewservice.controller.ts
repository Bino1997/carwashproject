import { Request, Response } from 'express';
import ServiceModel from '../../models/admin/services.model';
 
export default class ViewService {
    async findAll(req: Request, res: Response) {
        const ServiceData = await ServiceModel.find({}).exec();
        res.send(ServiceData);
        console.log(ServiceData);
      } 
}
