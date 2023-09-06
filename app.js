import express from "express";
import morgan from "morgan";
import cors from "cors"
import helmet from "helmet"
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import contactRout  from './routes/contact.routes.js';
import visiterRout from "./routes/visiter.routes.js"
import { errorHandler } from "./middleware/errorHandler.middleware.js";
dotenv.config();
connectDb();
const app = express();
app.use(express.json());
app.use(helmet());
// const corsOptions={
//   origin: [process.env.ORIGIN_LINK,process.env.ORIGIN_LINK2,process.env.ORIGIN_LINK3],
//   methods: "GET,POST,DELETE,PATCH",
// }
// app.use(cors(corsOptions));
app.use(cors());


if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  app.use("/api/contact",contactRout);
  app.use("/api/visiter",visiterRout);

app.use(errorHandler)

  export default app;