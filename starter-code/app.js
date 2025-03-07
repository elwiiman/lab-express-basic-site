const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (request, response) => {
  response.sendFile(`${__dirname}/views/home.html`);
});

app.get("/about", (request, response) => {
  response.sendFile(`${__dirname}/views/about.html`);
});

app.get("/photo", (request, response) => {
  response.sendFile(`${__dirname}/views/photo.html`);
});

app.listen(3000, () => {
  console.log("App runing in 3000 port");
});
