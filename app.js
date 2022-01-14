var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get("/", function(req,res){
    //res.send("Hey Guys");
    res.render("list");
});

app.listen(process.env.PORT || 3000,function(){
    console.log("Listening on port 3000");
})
