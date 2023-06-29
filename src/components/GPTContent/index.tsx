import { Navigate, useParams } from "react-router-dom";
import * as S from "./style";
import GPTChat from "@/components/common/GPTChat";
import GPTField from "../common/GPTField";
import { useCallback, useEffect, useState } from "react";
import AppTemplate from "@/templates/AppTemplate";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "@/services/firebase";
import postMessages from "@/utils/apis/postMessages";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loadingState } from "@/recoil/gptField.atom";
import { userObjState } from "@/recoil/userObj.atom";

export default function GPTContent() {
  const { id } = useParams();
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string; mid: string }[]
  >([]);

  const userObj = useRecoilValue(userObjState);

  const [check, setCheck] = useState(false);

  console.log(userObj);

  const setLoading = useSetRecoilState(loadingState);

  useEffect(() => {
    if (!id) return;
    onSnapshot(doc(db, "history", id), (doc) => {
      if (!(doc.exists() && doc.data().uid === auth.currentUser?.uid)) {
        setCheck(true);
      }
    });
    const unsub = onSnapshot(doc(db, "chat", id), (doc) => {
      const data = doc.data()?.messages;
      if (data && !check) {
        setMessages(data);
      }
    });

    return () => unsub();
  }, [id, check]);

  const handleSubmit = useCallback(
    async (value: string) => {
      if (!id) return;
      setLoading(true);
      await postMessages(id, value, messages);
      setLoading(false);
    },
    [id, messages, setLoading]
  );

  return (
    <AppTemplate>
      <S.Container style={{ color: "white" }}>
        <S.List>
          {!check ? (
            messages?.map((item, idx) => (
              <GPTChat
                id={id}
                key={item.mid}
                item={item}
                prevMessages={messages.slice(0, idx)}
              />
            ))
          ) : (
            <Navigate to="/" />
          )}
          <S.SizedBox />
        </S.List>
        <GPTField id={id} handleSubmit={handleSubmit} />
      </S.Container>
    </AppTemplate>
  );
}
