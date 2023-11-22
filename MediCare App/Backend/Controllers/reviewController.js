import Review from '../models/ReviewSchema.js'
import Doctor from '../models/DoctorSchema.js'
import { getSingleDoctor } from './doctorController.js';

//get all review//
export  const getAllReviews =async (req,res)=>{
    try {
        const reviews =await Review.find({})
        res.status(200).json({success:true, message:'Successful ', data:reviews})
    } catch (error) {
        res.status(200).json({success:false, message:'Not found '})
 
    }  

}

//create reviews//
export  const createReview =async (req,res)=>{
    if (!req.body.doctor)req.body.doctor =req.params.DoctorsId;
    if(!req.body.user) req.body.user=req.userId;

    const newReview =await newReview.save();

    try {
        const savedReview=await newReview.save();
   await Doctor.findByIdAndUpdate(req.body.doctor,{

   });
   res 
   .status(200)
   .json({success:true, message:"Reciew submitted" , data: savedReview});

    } catch (err) {
        res.status(500).json({success:false , message: err.message});
    }

}