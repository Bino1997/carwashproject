
// import { Request, Response } from 'express';
// import LatestBookingModel from '../../models/user/LatestBooking';

 
// export default class LatestSlot {
//   async getSlotById(req: Request, res: Response) {
//     try {
//       const searchId = req.params.id; // Assuming the ID is in the URL parameters
 
//       const searchData = await LatestBookingModel.findById(searchId).exec();
 
//       if (!searchData) {
//         return res.status(404).json({ message: 'service not found' });
//       }
 
//       res.status(200).json({ message: 'service found', service: searchData });
//     } catch (error) {
//       console.error('Error getting Service:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }
// }


import { Request, Response } from 'express';
// import ServiceModel from '../../models/admin/services.model';
import LatestBookingModel from '../../models/user/LatestBooking';
 
export default class LatestSlot  {
    async findAll(req: Request, res: Response) {
        const ServiceData = await LatestBookingModel.find({}).exec();
        res.send(ServiceData);
        console.log(ServiceData);
      } 
}
