const EXPRESS = require("express");
const PATH = require("path");

var app = EXPRESS();

app.use(EXPRESS.static(PATH.join(__dirname,"apps")));

app.listen(3000,() => {
  console.log("Server running on port 3000...")
});