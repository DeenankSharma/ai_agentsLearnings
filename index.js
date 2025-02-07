import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config()

const app = express();

app.use(cors())

app.use(bodyParser.json())

const port = process.env.PORT;

app.listen(port,()=>{
  console.log(`Listening on port : ${port}`)
})
