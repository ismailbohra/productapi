const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/v1", routes);

mongodb = {
  url: "mongodb+srv://cms:xxx123xxx@cluster0.tzgu9gg.mongodb.net/cmsbackend?retryWrites=true&w=majority",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

mongoose.connect(mongodb.url, mongodb.options).then(() => {
  console.log("Connected to MongoDB");
  server = app.listen(9000, (res) => {
    res.send("products");
    console.log(`Listening to port 9000`);
  });
});
