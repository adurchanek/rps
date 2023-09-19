import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"
import {register} from "./controllers/auth.js"
import userRoutes from "./routes/users.js";

/*CONFIGURATIONS*/
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


/*ROUTES WITH FILES*/
app.post("/auth/register", register)

/*ROUTES*/
app.use("/auth", authRoutes)
app.use("/users", userRoutes)

/*MONGOOSE SETUP*/
const PORT = process.env.PORT || 6001;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on Port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(`${error} did not connect`);
    });
