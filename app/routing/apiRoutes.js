var friends = require("../app/data/friends")


module.exports = function(app){
app.get("/api/friends", function(req,res){
    res.json(friends)
    
});    

app.post("/api/userinput", function(req,res){
    friends.push(req.body)
    console.log(req.body)
    res.json(true);
})



};