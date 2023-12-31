const express= require('express');
const router=express.Router();
const authController=require('../controllers/auth');

router.get("/",(req,res)=>{
   
    res.render("index");
 });

 router.get("/register",(req,res)=>{
   
    res.render("register");
 });

 router.get("/login",(req,res)=>{
   
   res.render("login");
});

router.get("/profile",(req,res)=>{
   
   res.render("profile",{ user: req.user });
});

router.get("/logout",(req,res)=>{
   
   res.redirect("/");
});

 module.exports=router;