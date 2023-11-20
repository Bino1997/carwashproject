import { Router } from 'express';
import adminSignIn from '../../controllers/admin/signin.controller';
import ViewAdmins from '../../controllers/admin/viewAdmins.controller';
import adminAuthenticateMiddleware from '../../controllers/admin/adminAuthenticateMiddleware';
import UserInfo from '../../controllers/admin/userInfo';



class SignInRoutes {
  router = Router();
  signInController = new adminSignIn();
  viewAdminsController = new ViewAdmins();
  userInfoController = new UserInfo();


  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    this.router.post('/', this.signInController.login);
    this.router.get('/usernames', adminAuthenticateMiddleware, this.viewAdminsController.findAll);
    this.router.get('/list', this.userInfoController.userInfo);

    
    this.router.post('/adminlogin', this.signInController.adminlogin);



  }
}

export default new SignInRoutes().router;
