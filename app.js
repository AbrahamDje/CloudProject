const express = require ("express");
const app = express();


const bodyParser = require("body-parser"); 
const ejs =require("ejs");
const mongoose =require("mongoose");

 //EJS
app.set("view engine","ejs");
app.use(express.static("public"));

const bcrypt = require('bcrypt-nodejs');
// Models 
const User = require ("./models/user.js");
app.use(bodyParser.urlencoded({extend:false}));

const methodOverride =require("method-override");

const flash =require("connect-flash");

app.get("/",function(req,res){
res.render("index");
});
  
app.get("/signup",function(req,res){
    res.render("signup");
    });

    app.get("/Login",function(req,res){
        res.render("Login");
        });

    app.get("/About",function(req,res){
        res.render("About");
        });

app.listen(3000,function(req,res){
    console.log("tout marche bien");
})

 