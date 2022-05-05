import { Message } from "@line/bot-sdk";

export const replyMessage = (text: string): Message => {
  return {
    type: "text",
    text: text,
  };
};
