import { useParams } from "react-router-dom";
import * as S from "./style";
import GPTChat from "@/components/common/GPTChat";
import GPTField from "../common/GPTField";
import { useCallback, useEffect, useState } from "react";
import AppTemplate from "@/templates/AppTemplate";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/services/firebase";
import postMessages from "@/utils/apis/postMessages";
import { useSetRecoilState } from "recoil";
import { loadingState } from "@/recoil/gptField.atom";

export default function GPTContent() {
  const { id } = useParams();
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string; mid: string }[]
  >([]);

  const setLoading = useSetRecoilState(loadingState);

  useEffect(() => {
    if (!id) return;
    const unsub = onSnapshot(doc(db, "chat", id), (doc) => {
      const data = doc.data()?.messages;
      if (data) {
        setMessages(data);
      }
      // console.log("Current data: ", doc.data());
    });

    return () => unsub();
  }, [id]);

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
          {messages?.map((item, idx) => (
            <GPTChat
              id={id}
              key={item.mid}
              item={item}
              prevMessages={messages.slice(0, idx)}
            />
          ))}
          <S.SizedBox />
        </S.List>
        <GPTField id={id} handleSubmit={handleSubmit} />
      </S.Container>
    </AppTemplate>
  );
}
