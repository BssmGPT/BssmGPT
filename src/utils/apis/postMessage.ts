import { db } from "@/services/firebase";
import { setDoc, doc } from "firebase/firestore";

export default async function postMessage(
  id: string,
  messages: {
    role: "user" | "assistant";
    content: string;
    mid: string;
  }[],
) {
  // console.log("postMeessage");
  // console.log(messages);
  await setDoc(doc(db, "chat", id), {
    messages,
  });
}
