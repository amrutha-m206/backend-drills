const songSchema=require("../models/musicSchema.js");

let insertSong=async (req,res)=>{
    try{
   const newSong=await songSchema.create(req.body);
   res.send({status:1,msg:"Song inserted successfully"});
   }
   catch(err){
    res.send({status:0,msg:err.message})
   }

};


let listSong= async(req,res)=>{
    try{
       const songs=await songSchema.find({mood:req.params.mood});
       res.send(songs);
    }
    catch(err){
        res.send({status:0,error:err});
    }
}

let updateSong=async(req,res)=>{
    let songId=req.params.id;
      try {
        const updatedSong = await songSchema.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        if (!updatedSong)
          return res.status(404).json({ message: "Song not found" });
        res.json(updatedSong);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}
let deleteSong = async (req, res) => {
  try {
    const deletedSong = await songSchema.findByIdAndDelete(req.params.id);
    if (!deletedSong)
      return res.status(404).json({ message: "Song not found" });
    res.json({ message: "Song deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting song" });
  }
};

module.exports={listSong,updateSong,insertSong,deleteSong}