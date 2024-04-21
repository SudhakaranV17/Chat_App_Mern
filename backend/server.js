import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import connectMongo from "./db/connectDB.js";
import authRoutes from "./routes/authroutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";


const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

app.use(express.json()); //  Middleware for parsing JSON bodies
app.use(cookieParser()) // Adds middleware that parses cookies and exposes them on req.cookies


app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);


app.listen(port, () => {
    connectMongo();
    console.log(`Server is running on port ${port}`);
});