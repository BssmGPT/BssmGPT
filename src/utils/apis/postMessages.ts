import sendMessage from "@/apis/sendMessage";
import { v4 as uuidv4 } from "uuid";
import postMessage from "./postMessage";

export default async function postMessages(
  mid: string,
  value: string,
  messages: { role: "user" | "assistant"; content: string; mid: string }[]
) {
  const userMessage: {
    mid: string;
    role: "user" | "assistant";
    content: string;
  } = { mid: uuidv4(), role: "user", content: value };

  // 유저 입력 삽입
  await postMessage(mid, [...messages, userMessage]);

  const filteredMessages = messages.map((message) => ({
    role: message.role,
    content: message.content,
  }));

  // 기존 데이터 + 유저 입력을 기반한 데이터 받아옴
  /* const response = await sendMessage([
    ...filteredMessages,
    { role: "user", content: value },
  ]);

  const message: { role: "user" | "assistant"; content: string } =
    response["choices"][0]["message"];
  const gptMessage = { ...message, mid: uuidv4() }; */
  const gptMessage: {
    role: "user" | "assistant";
    content: string;
    mid: string;
  } = {
    role: "assistant",
    content: "몰루?",
    mid: uuidv4(),
  };

  // 받은 데이터 삽입
  await postMessage(mid, [...messages, userMessage, gptMessage]);

  return true;
}
