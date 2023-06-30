import express from "express";
import axios from "axios"; //way to call APIs
import dotenv from "dotenv";
import { openai } from "../index.js";

dotenv.config();
const router = express.Router();

router.post('text', async (req, res) => {
    try {
        const { text, activeChatId } = req.body;
    } catch(error) {
        console.error("error", error);
        res.status(500).json({ error: error.message });
    }
});

export default router;
