/* packages */
import { WebhookEvent } from "@line/bot-sdk";
/* lib */
import { lineClient } from "../../lib/line";
/* handler */
import { followHandler } from "./followHandler";
/* messages */
import { errorMessage } from "../messages/errorMessage";

export const handlers = async (event: WebhookEvent): Promise<void> => {
  try {
    switch (event.type) {
      case "follow":
        return await followHandler(event);
    }
  } catch (err: unknown) {
    lineClient.pushMessage(event.source.userId!, errorMessage).catch;
    console.log(err);
    throw new Error("handlers");
  }
};
