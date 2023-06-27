import { db } from "@/services/firebase";
import { setDoc, doc } from "firebase/firestore";

export default async function postMessage(
  id: string,
  messages: {
    id: string;
    content: string;
    role: "user" | "assistant";
  }[]
) {
  console.log("postMeessage");
  console.log(messages);
  await setDoc(doc(db, "chat", id), {
    messages,
  });
}
