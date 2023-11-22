
import Doctor from '../models/DoctorSchema.js';


export const updateDoctor = async(req,res)=>{
    const id= req.params.id
try {
    const updatedDoctor =await Doctor.findByIdAndUpdate(
        id,
        {$set:req.body},
        {new:true})
res
.status(200)
.json({
    success:true,
     message:"Successfuly updated" , 
     data:updatedDoctor
     })
} catch (err) {
    res.status(500).json({success:false, message:"Failed to updat"  })

}

}
// ............................
export const deleteDoctor = async(req,res)=>{
    const id= req.params.id
try {
  await Doctor.findByIdAndDelete(
        id,
        )
res
.status(200)
.json({
    success:true,
     message:"Successfuly delete" , 
     })
} catch (err) {
    res.status(500).json({success:false, message:"Failed to updat"  })
}

}
// .................................
export const getSingleDoctor = async(req,res)=>{
    const id= req.params.id
try {
    const doctor =await Doctor.findById( id)
    .populate("reviews")
    .select("-password");
res 
.status(200)
.json({
    success:true,
     message:"Doctor found" , 
     data:doctor,
     })
} catch (err) {
    res.status(404).json({success:false,
         message:"No Doctor found"  })

}

}
// ...................
export const getAllUser = async(req,res)=>{
try {
    const doctors =await Doctor.find({}).select("-password");

res
.status(200)
.json({
    success:true,
     message:"Users found" , 
     data:doctors,
     })
} catch (err) {
    res.status(404).json({success:false,
         message:"Not found"  })

}

}