import { db } from "@/services/firebase";
import { getDoc, doc } from "firebase/firestore";

export default async function getHistories() {
  const docRef = doc(db, "history");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No Such Data");
    return [];
  }
}
