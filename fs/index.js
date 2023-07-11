//(i)
console.log(__dirname); //To print the current working directory (without fsmodule)

const process = require("node:process");
console.log(process.cwd());

const express = require("express");
const { open } = require("node:fs/promises");
const { fs } = require("fs");

const app = express();

app.get("/1", (_request, response) => {
  response.send(process.cwd());
});

app.get("/2", async (_request, response) => {
  const file = await open("../TextFile.txt");
  let result = "";
  for await (const line of file.readLines()) {
    result += line;
  }
  console.log(result);
  response.send(result);
});

app.get("/3", (_request, response) => {
  fs.writeFile("../TextFile.txt", "Javascript_Node", (err) => {
    if (err) {
      console.log("error writing File: ", err);
    } else {
      console.log("File Written Successfully");
      response.send("File Written Successfully");
    }
  });
});

app.listen(4999, () => {
  console.log("Server Started");
});
