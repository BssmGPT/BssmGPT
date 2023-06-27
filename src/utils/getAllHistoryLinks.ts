import { db } from "@/services/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function getAllHistoryLinks() {
  const querySnapShot = await getDocs(collection(db, "history"));
  return querySnapShot.docs.map((doc) => doc.data());
}
