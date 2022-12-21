const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = process.env.PORT || 3002;
const path = require("path");
const app = require("./app");

dotenv.config({ path: "./src/config.env" });

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
