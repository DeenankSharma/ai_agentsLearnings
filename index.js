import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai";
import client from "./OpenAI/AIclient.js";
import generateResponse from "./utils/tools.js";

dotenv.config()

const app = express();

app.use(cors())

app.use(bodyParser.json())

const port = process.env.PORT;

generateResponse();

app.listen(port,()=>{
  console.log(`Listening on port : ${port}`)
})
