import { db } from "@/services/firebase";
import { doc, setDoc } from "firebase/firestore";

export default async function updateHistory(id: string, title: string) {
  await setDoc(doc(db, "history", id), {
    id,
    title,
  });
}
