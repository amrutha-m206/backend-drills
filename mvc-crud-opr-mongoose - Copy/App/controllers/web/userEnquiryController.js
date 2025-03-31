const { model } = require("mongoose");
const enquiryModel=require("../../models/enquiry.model.js"); 

let enquiryInsert=(req,res)=>{
    let {name,email,phone,message}=req.body;
    // console.log(name, email, phone, message);
    let enquiry=new enquiryModel({
        name:name,
        email:email,
        phone:phone,
        message:message
    });
    enquiry.save().then(()=>{
         res.send({status:1,mgg:"Enquiry saved successfully"});
    }).catch((err)=>{
        res.send({status:0,msg:"Error while saving enquiry",error:err});
    })
 
}

let enquiryList=async(req,res)=>{
   let enquiryList=await enquiryModel.find();
    res.status(200).send({status:1,msg:"Enquiry list",data:enquiryList});
}


let enquiryDelete = async (req, res) => {
  let enquiryId = req.params.id;
  let deletedEnquiry = await enquiryModel.deleteOne({ _id: enquiryId });
  res.send({
    status: 1,
    msg: "Enquiry deleted successfully",
    id: enquiryId,
    delRes: deletedEnquiry,
  });
}


let enquiryUpdate = async (req, res) => {
  let enquiryId = req.params.id;
  let { name, email, phone, message } = req.body;
  // console.log(name, email, phone, message);
  let updateObj = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };
  let updateRes = await enquiryModel.updateOne({ _id: enquiryId }, updateObj);
  res.send({
    status: 1,
    msg: "Enquiry updated successfully",
    id: enquiryId,
    updateRes,
  });
}

module.exports={enquiryInsert,enquiryList,enquiryDelete,enquiryUpdate};