const app = require("./app");
const path = require("path");
const mongoose = require("mongoose");

require("dotenv").config({ path: ".env" });

module.exports = {
  entry: 'server.js',
};

const port = process.env.PORT || 3002;
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.set("strictQuery", false);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`Banco conectado`);
  });

app.listen(port, "127.0.0.1", () => {
  console.log(`App running on port ${port}...`);
});
