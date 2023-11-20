import express from 'express';

import { uploadMiddleware } from '../../controllers/admin/uploadMiddleware';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
import Viewservice from '../../controllers/admin/viewservice.controller';




const router = express.Router();

const viewserviceController= new Viewservice();





// Define the route to create a hotel with the uploadMiddleware

router.get('/', adminAuthenticateMiddleware, uploadMiddleware.array("image",10),viewserviceController.findAll);



export default router;