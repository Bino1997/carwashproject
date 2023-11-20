import express, { Router } from 'express';
import UserReg from '../../controllers/user/userSignUp.controller';
import UserSignIn from '../../controllers/user/userSignIn.controller';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';

import ViewSinglItem from '../../controllers/user/viewSingleItem.controller';


import userAuthenticateMiddleware from '../../controllers/user/userAuthenticateMiddleware';
import LatestSlot from '../../controllers/user/latestbooking.controller';

// import getBookedHotelDetails from '../../controllers/user/viewBookingId.controller';
// import viewBookingId from '../../controllers/user/viewBookingId.controller';
// import GetBookingController from '../../controllers/user/viewBookingId.controller';



class SlotRoutes {
  router = Router();
 
  latestslotAvaliable=new LatestSlot();
  
 
  

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
 
    this.router.get("/",userAuthenticateMiddleware,this.latestslotAvaliable.findAll);
 
    
    
    

    
    
  }
}

export default new SlotRoutes().router;
