import { db } from "@/services/firebase";
import { doc, setDoc } from "firebase/firestore";

export default async function postHistory(id: string, uid: string) {
  await setDoc(doc(db, "history", id), {
    id,
    title: `${new Date()}`,
    uid
  });
}
