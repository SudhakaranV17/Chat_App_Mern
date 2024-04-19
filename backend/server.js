import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/authroutes.js";
import connectMongo from "./db/connectDB.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

app.use(express.json()); //  Middleware for parsing JSON bodies
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//     res.send("hello")
// });




app.listen(port, () => {
    connectMongo();
    console.log(`Server is running on port ${port}`);
});