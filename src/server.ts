import express, { request, response } from "express";

const app = express();
app.get("/", (_, response) => {
  return response.send("Hello elite tracker");
});

app.listen(4001, () => console.log("Server is running at port 4001"));
