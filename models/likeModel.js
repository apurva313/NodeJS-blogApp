const mongoose= require("mongoose");

//route Handler
const likeSchema=new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post", //reger to post model
    },
    user: {
        type: String,
        required: true,
    },
    body:{
        type:String,
        required: true,
    }
});

//export
module.exports=mongoose.model("Like", likeSchema);