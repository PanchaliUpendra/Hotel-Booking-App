const { insertBooking, getUserBookings } = require("./bookings.model");


async function  handleBookRestaurant(req,res){
    try{
        const result = await insertBooking(req.body);
        if(result.success){
            return res.status(201).json(result);
        }else{
            return res.status(400).json(result);
        }
    }catch(err){
        console.log('getting an error in controller ',err.message);
        return res.status(500).json({success:false,message:err.message});
    }
}

async function handleGetUserBookings(req,res){
    try{
        const {userid} = req.params;
        const result = await getUserBookings(userid);
        if(result.success){
            return res.status(201).json(result);
        }else{
            return res.status(400).json(result);
        }
    }catch(err){
        console.log(err.message);
        return res.status(500).json({success:false,message:err.message});

    }
}

module.exports={
    handleBookRestaurant,
    handleGetUserBookings
}