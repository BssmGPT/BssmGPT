import { db } from "@/services/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export default async function deleteAllHistories(historyIds: string[]) {
  console.log(historyIds);
  historyIds.forEach(async (id) => {
    await deleteDoc(doc(db, "history", id));
    await deleteDoc(doc(db, "chat", id));
  });

  return true;
}
