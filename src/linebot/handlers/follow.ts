/* packages */
import { FollowEvent } from "@line/bot-sdk";
/* lib */
import { lineClient } from "../../lib/line";
/* message */
import { followMessage } from "../notice-messages/follow";

export const followHandler = async (event: FollowEvent): Promise<void> => {
  await lineClient.replyMessage(event.replyToken, followMessage);
};
