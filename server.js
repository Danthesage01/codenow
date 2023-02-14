import express from "express";
import dotenv from "dotenv"
dotenv.config()
import "express-async-errors"
import { dirname} from "path"
import { fileURLToPath } from "url";
import path from "path";

import cookieParser from "cookie-parser"

// DB and other middleware import
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js"
import notFoundMiddleware from "./middleware/notFound.js";
import errorHandlingMiddleware from "./middleware/errorHandling.js";
import xss from "xss-clean"
import helmet from "helmet"
import mongoSanitize from "express-mongo-sanitize"
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.resolve(__dirname, "./client/build")))
app.use(express.json());
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("welcome here");
});
app.use("/api/v1/auth", authRouter)

app.get("*",(req, res)=>{
res.sendFile(path.resolve(__dirname,"./client/build", "index.html" ))
})

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
