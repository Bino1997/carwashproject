import { Application } from "express";
import SignInRoutes from "../routes/admin/signin.routes";
import router from "./admin/services.routes"
import userRoutes from "./user/user.routes";
import UserRouteswithID from './user/user.routes copy'
import SlotRoutes from '../routes/user/userslot.routes'




export default class Routes {
  constructor(app: Application) {
    
    app.use("/api/adminsign", SignInRoutes);
    app.use("/api/viewadmin",SignInRoutes);
    app.use("/api/addservices", router);
    app.use("/api/viewservice",router);
    app.use("/api/deleteservices",router);


   
    app.use("/api/userreg",userRoutes);
    app.use("/api/userlogin",userRoutes);
    app.use("/api/search",userRoutes);
    // app.use("/api/userlatestslot",UserRouteswithID)

    app.use("/api/userviewsingleitem",SlotRoutes)
    app.use("/api/userbook",userRoutes);
    app.use("/booking",userRoutes)
    app.use("/list",SignInRoutes)
  

  
  

  }
}
