const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = process.env.PORT || 3002;
const http = require("http");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((connection) => {
    console.log(`Banco conectado ${DB}`);
  });

app.listen(port, "127.0.0.1", () => {
  console.log(`App running on port ${port}...`);
});
