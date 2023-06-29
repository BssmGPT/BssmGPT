import { db } from "@/services/firebase";
import { setDoc, doc } from "firebase/firestore";

export default async function postUser(
  name: string,
  email: string,
  photoURL: string
) {
  console.log("postUser");
  await setDoc(doc(db, "user", name), {
    email,
    photoURL,
  });
}
