import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { Configuration, OpenAIApi } from "openai";
import openaiRoutes from "./routes/openai.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

/* OPENAI API */
const configuration = new Configuration({
    //organization: "org-yM4RwZYp1wJ42kKf1MqZF8Wk",
    apiKey: process.env.OPEN_AI_KEY,
});
export const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();

/* ROUTES */
app.use("/openai", openaiRoutes);


/* SETUP SERVER */
const PORT = process.env.PORT || 9000;
console.log(PORT);
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
