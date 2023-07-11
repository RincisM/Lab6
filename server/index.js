const express = require("express"); //Importing Express Module

const app = express(); //Creating an express application by initialising express

//In get method, if this route comes
app.get("/", (_request, response) => {
  //Request is send by the browser to us. It contains data about the browser. (_) underscore to denote an unused variable.
  //Response is send by us to the browser
  response.send("Hello World");
});

//Creating another route using http method

app.get("/returningRequest", (request, response) => {
  console.log(request);
  response.send("logged");
});

//Listen should be at the end of the code
app.listen(4999, () => {
  console.log("server");
});
