import dotenv from "dotenv";
dotenv.config();

export const LINE_MESSAGING_CHANNEL_ACCESS_TOKEN = process.env.CHANNEL_ACCESS_TOKEN || "";
export const LINE_MESSAGING_CHANNEL_SECRET = process.env.CHANNEL_SECRET || "";
