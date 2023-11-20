

import BookingModel from '../../models/user/booking.model';
import LatestBooking from '../../models/user/LatestBooking'

export default class Booking {
  async bookingInfo(req: any, res: any) {
    console.log("wwwwwwwwwwwwwwwwww",req.body);
    
    try {
      const data = {
        date: new Date(),
        priceValue: req.body.priceValue,
        location: req.body.location,
        phoneNumber : req.body.phoneNumber
      }

    const bookingAvailability: any = await LatestBooking.findOne();

    if (bookingAvailability){
        console.log("-----------",bookingAvailability);
        
 let  timeFromMongoDB = new Date(bookingAvailability.date); 

let fifteenMinutesLater = new Date(timeFromMongoDB.getTime() + 15 * 60000);
 if (data.date > fifteenMinutesLater){
    console.log("..........we can book,slot is available..........");
    
    const userBooking = await BookingModel.insertMany(data);
    const booking = await LatestBooking.updateOne(data)


    res.status(201).json(userBooking); // Respond with the created user object

 }else{
    console.log("slot is not avaialble");

    res.status(500).json({
        message: "no slot"
    })
    
 }
   
    }else{
        console.log("no data available");
        const userBooking = await BookingModel.insertMany(data);
        const booking = await LatestBooking.insertMany(data)

        res.status(201).json(userBooking); // Respond with the created user object
        
    }

      // Use the create method to insert data
     
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}



