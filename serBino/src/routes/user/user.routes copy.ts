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



class UserRouteswithID {
  router = Router();
  userRegController = new UserReg();
  userLoginController=new UserSignIn()

  userViewController=new ViewSinglItem();
  latestslotAvaliable=new LatestSlot();
  
 
  

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    // this.router.use(express.json());
    // this.router.post('/register', this.userRegController.create);
    // this.router.post('/login', this.userLoginController.login);
    // this.router.get('/', userAuthenticateMiddleware,this.userSearchController.searchService);
    this.router.get("/:id",userAuthenticateMiddleware,this.userViewController.getServiceById);
    // this.router.get("/:id",userAuthenticateMiddleware,this.latestslotAvaliable.getSlotById);
 
    
    
    

    
    
  }
}

export default new UserRouteswithID().router;
