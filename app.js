const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");


const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];
var workitems = ["hello"];

// *******************APP****************************************



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');


// **********************LISTEN*************************************


app.listen(3000, function() {

  console.log("server has started on port 3000");

});
// ****************************post********************************
app.post("/", function(req, res)

  {


  var item = req.body.newItem;

    if (req.body.list === "work") {

      workitems.push(item);
      res.redirect("/work");

    } else {

      items.push(item);
      res.redirect("/");
    }
});

app.post("/work", function(req, res)

  {
    let item = req.body.newItem;

    workitems.push(item);
    res.redirect("/work");
  });
// *****************************************get*****************************



app.get("/about",function(req,res){

  res.render("about");


}
);
app.get("/work", function(req, res) {

  res.render("list", {listTitle: "work list",nlm: workitems});
});

app.get("/", function(req, res) {

day= date();


  res.render("list", {
    listTitle: day,
    nlm: items
  });
});
