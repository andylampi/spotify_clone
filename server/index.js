import express  from "express";
import router from "./routes/index.js"
import cors from "cors"


let app = express();
const corsOption = {
    origin: "*",
    optionsSuccessStatus: 200
};
app.use(cors(corsOption))
app.use("", router)

app.listen(2000, (console.log("server is up")))