var express = require('express');
var app = express();

var blog = [
    {id: 1, name: "Hupen Paija", imgurl: "", url:""},
    {id: 2, name: "Ram Pun", imgurl: 55, url:""},
    {id: 3, name: "Gita Pun", imgurl: 66, url: ""}
]
app.get('/', function(req, res){
   res.json(blog);
});

app.listen(process.env.PORT || 3000);