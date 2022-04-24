/* packages */
import { middleware, WebhookEvent } from "@line/bot-sdk";
import express from "express";
/* lib */
import { lineMiddlewareConfig } from "../lib/line";
/* handlers */
import { handlers } from "./handlers";

export const app: express.Express = express();

// Test Routing
app.get("/", (req: express.Request, res: express.Response): void => {
  res.send("hello");
});
// App Routing
app.use(middleware(lineMiddlewareConfig));
app.post("/webhook", async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    res.status(200).end();
    console.log("aa");
    const events: WebhookEvent[] = req.body.events;
    events.map(async (event: WebhookEvent): Promise<void> => {
      handlers(event);
    });
  } catch (err: unknown) {
    console.log(err);
    res.status(500).end();
  }
});
