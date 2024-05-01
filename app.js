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
app.set('trust proxy', true);
const corsOptions={
  origin: ['http://localhost:3000','kazh.netlify.app'],
  methods: "POST",
}
app.use(cors(corsOptions));


if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  app.use("/api/contact",contactRout);
  app.use("/api/visiter",visiterRout);

app.use(errorHandler)

  export default app;
