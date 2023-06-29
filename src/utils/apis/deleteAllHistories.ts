import { auth, db } from "@/services/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default async function deleteAllHistories(historyIds: string[]) {
  console.log(historyIds);
  const historiesRef = collection(db, "history");
  const q = query(historiesRef, where("uid", "==", auth.currentUser?.uid));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(async (d) => {
    await deleteDoc(doc(db, "history", d.data().id));
    await deleteDoc(doc(db, "chat", d.data().id));
  });

  return true;
}
