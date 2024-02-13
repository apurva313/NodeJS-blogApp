//import model
const Post=require("../models/postModel");
const Comment=require("../models/commentModel");

//Business Logic
exports.createComment= async(req,res)=>{
    try{

        //fetch data from req body
        const {post, user, body}=req.body;

        //create comment object
        const comment= new Comment({
            post, user, body
        });

        //Save new comment into the database
        const savedComment= await comment.save();

        //find the post by ID, add the new comment to its comment array
        const updatedPost=await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true})
        .populate("comments")
        .exex();

        res.json({
            post: updatedPost,
        });

    }catch(error){
        return res.status(500).json({
            error: "Error while creating comment",
        });
    }
}