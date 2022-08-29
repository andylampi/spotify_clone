import express  from "express";
import router from "./routes/index.js"
import cors from "cors"
import dotenv  from "dotenv"

let app = express();
dotenv.config()
const corsOption = {
    origin: "*",
    optionsSuccessStatus: 200
};
app.use(cors(corsOption))
app.use("", router)
app.use(express.static("public"))




app.listen(process.env.PORT, (console.log("server is up")))