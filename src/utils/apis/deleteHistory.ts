import { db } from "@/services/firebase";
import { doc, deleteDoc } from "firebase/firestore";

export default async function deleteHistory(id: string) {
  await deleteDoc(doc(db, "history", id)); // 해당 History 삭제
  await deleteDoc(doc(db, "chat", id)); // 해당 History와 연계된 챗도 삭제

  return true;
}
