import express from "express";
import dotenv from "dotenv"
dotenv.config()
import "express-async-errors"


import cookieParser from "cookie-parser"

// DB and other middleware import
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js"
import notFoundMiddleware from "./middleware/notFound.js";
import errorHandlingMiddleware from "./middleware/errorHandling.js";

const app = express();

app.use(express.json());
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("welcome here");
});


app.use("/api/v1/auth", authRouter)



// ERROR MIDDLEWARE
app.use(notFoundMiddleware)
app.use(errorHandlingMiddleware)

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server started on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
