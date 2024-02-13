const express=require("express");
const router=express.Router();

//Import all the controller
const { dummyLink }=require("../controllers/likeController");
const {createComment}=require("../controllers/commentController");

//Mapping Create
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);


//export

module.exports=dummyLink;