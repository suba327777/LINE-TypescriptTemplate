/* packages */
import { MessageEvent, TextEventMessage } from "@line/bot-sdk";
import { lineClient } from "../../../lib/line";
import { replyMessage } from "../../notice-messages/reply";
export const messageTextHandler = async (event: MessageEvent): Promise<void> => {
  try {
    const { text } = event.message as TextEventMessage;

    await lineClient.replyMessage(event.replyToken, replyMessage(text));
  } catch (err) {
    console.log(err);
    throw new Error("message text handler");
  }
};
