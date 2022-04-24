/* packages */
import { middleware, WebhookEvent } from "@line/bot-sdk";
import express from "express";
/* lib */
import { lineMiddlewareConfig } from "../lib/line";
/* handlers */
import { handlers } from "./handlers";

const PORT = process.env.PORT || 3000;

const app: express.Express = express();

// App Routing
app.use(middleware(lineMiddlewareConfig));
app.post("/", async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    res.status(200).end();
    const events: WebhookEvent[] = req.body.events;
    events.map(async (event: WebhookEvent): Promise<void> => {
      handlers(event);
    });
  } catch (err: unknown) {
    console.log(err);
    res.status(500).end();
  }
});

// Start the server
app.listen(PORT, (): void => {
  console.log(`Application is live and listening on port ${PORT}`);
});
