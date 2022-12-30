import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

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

