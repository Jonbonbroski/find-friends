var path = require("path");

module.exports = function(app){

app.get("/", function(req,res){
    //res.sendFile(path.join(__dirname, "home.html"))
    // res.sendFile(path.join(__dirname, "app\\data\\friends.js"))
    res.sendFile(path.join(__dirname, "../public/home.html"))

});

app.get("/survey", function (req,res){
     res.sendFile(path.join(__dirname, "../public/survey.html"))
    //res.sendFile(path.join(__dirname, "survey.html"))
    // res.sendFile(path.join(__dirname, "app\\data\\friends.js"))
});


};