import express  from "express";
import router from "./routes/index.js"

let app = express();

app.use("", router)

app.listen(2000, (console.log("server is up")))