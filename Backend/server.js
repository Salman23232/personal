import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import portfolioRouter from "./Routes/portfolio.route.js";
import authRouter from "./Routes/auth.route.js";
import userRouter from "./Routes/user.route.js";
import { connectDB } from "./Utils/connectDB.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/portfolio", portfolioRouter);




const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
