let mongoose=require('mongoose');

let songSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    artist:{
      type:String
    },
    mood:{
        type:String,
        enum:["happy","sad","energetic"],
        required:true
    },
    link:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("Song",songSchema);