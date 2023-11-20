
import { Request, Response } from 'express';
import ServiceModel from '../../models/admin/services.model';
 
export default class ViewSinglItem {
  async getServiceById(req: Request, res: Response) {
    try {
      const searchId = req.params.id; // Assuming the ID is in the URL parameters
 
      const searchData = await ServiceModel.findById(searchId).exec();
 
      if (!searchData) {
        return res.status(404).json({ message: 'service not found' });
      }
 
      res.status(200).json({ message: 'service found', service: searchData });
    } catch (error) {
      console.error('Error getting Service:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
 