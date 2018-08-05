// can't use HTML DOM, for example alert()
// let x = 3;
// console.log(x);

// load express package 
let express = require("express");
// create applicatoin object
let app = express();
// start the server at http://localhost:3000/
app.listen(3000, function () {
    console.log("Server Started");
})