import BookingModel from '../../models/user/booking.model';
import LatestBooking from '../../models/user/LatestBooking'


export default class userInfo {

    async userInfo(req: any, res: any) {
        console.log("+++++++++++++++++++++++++++++++++++++++");

try {

    const result = await BookingModel.find()

    return res.status(200).json({
        data: result
    })

    
} catch (error) {
    console.error()
}

    }

}