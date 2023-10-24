//jshint esversion:6

const mongoose = require("mongoose")
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var items =[]
const { MongoClient, ServerApiVersion } = require('mongodb');
mongoose.connect('mongodb+srv://pinnukoushik1:koushik2004@koushik.jttd3u3.mongodb.net/todolist');
app.get("/", function(req, res) {

const day = date.getDate();
  
model.find(). then(output=>{
  res.render("list", {listTitle: day, newListItems:output});
})});

const listschema= mongoose.Schema({
   div : String
})

const model = mongoose.model("item",listschema)

app.post("/", function(req, res){
  const item = req.body.newItem;
  const det = new model({
    div:item
  })
  model.insertMany([det])
  res.redirect("/")
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/delete", function name(req, res) {
  var idr = req.body.checkbox
  model.findByIdAndRemove(idr)
  .then(doc => {
    if (doc) {
      console.log("Document deleted successfully");
    } else {
      console.log("No matching document found");
    }
    res.redirect("/");
  })
})

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
