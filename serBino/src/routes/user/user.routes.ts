import express, { Router } from 'express';
import UserReg from '../../controllers/user/userSignUp.controller';
import UserSignIn from '../../controllers/user/userSignIn.controller';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';

import ViewSinglItem from '../../controllers/user/viewSingleItem.controller';


import userAuthenticateMiddleware from '../../controllers/user/userAuthenticateMiddleware';
import BookingController from '../../controllers/user/userbookings';
// import getBookedHotelDetails from '../../controllers/user/viewBookingId.controller';
// import viewBookingId from '../../controllers/user/viewBookingId.controller';
// import GetBookingController from '../../controllers/user/viewBookingId.controller';



class UserRoutes {
  router = Router();
  userRegController = new UserReg();
  userLoginController=new UserSignIn()

  userViewController=new ViewSinglItem();
  bookingController = new BookingController();
  

  
 
  

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.use(express.json());
    this.router.post('/register', this.userRegController.create);
    this.router.post('/login', this.userLoginController.login);

    this.router.post('/booking', this.bookingController.bookingInfo);
    this.router.get('/api/profile', userAuthenticateMiddleware, this.userLoginController.getCurrentUser);
    // this.router.get("/:id",userAuthenticateMiddleware,this.userViewController.getServiceById);
 
    
    
    

    
    
  }
}

export default new UserRoutes().router;
