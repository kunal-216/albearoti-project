import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import connectDB from "./config/db.js"

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);

app.use("/", (req, res) => {
    res.send("Hello from Server");
});

app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});