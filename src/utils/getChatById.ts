import { db } from "@/services/firebase";
import { getDoc, doc } from "firebase/firestore";

export default async function getChatById(id: string) {
  const docRef = doc(db, "chat", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log(docSnap.data());
    return docSnap.data().messages;
  } else {
    console.log("No Such Data");
    return [];
  }
}
