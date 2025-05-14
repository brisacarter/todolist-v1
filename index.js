const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

//Exam Items
let finalExamItems = ["BUS320", "ENG316", "ICS 360", "ICS 385"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.redirect("/finals");
});

app.post("/", function(req, res) {
    // Adds items to the Finals list
    let item = req.body.newItem;

    if (req.body.list === "Finals Exam List") {
        finalExamItems.push(item);
    }

    res.redirect("/finals");
});

app.get("/finals", function(req, res){
    res.render("list", {listTitle: "Finals Exam List", newListItems: finalExamItems})
});

app.listen(3000, function() {
console.log ("Server is running on port 3000")
});