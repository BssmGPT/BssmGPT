import { useParams } from "react-router-dom";
import * as S from "./style";
import GPTChatItem from "@/components/common/GPTChat";
import GPTField from "../common/GPTField";
import { useCallback, useEffect, useState } from "react";
import AppTemplate from "@/templates/AppTemplate";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/services/firebase";
import postMessages from "@/utils/apis/postMessages";

export default function GPTContent() {
  const { id } = useParams();
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string; id: string }[]
  >([]);

  useEffect(() => {
    if (!id) return;
    const unsub = onSnapshot(doc(db, "chat", id), (doc) => {
      const data = doc.data()?.messages;
      if (data) {
        setMessages(data);
      }
      console.log("Current data: ", doc.data());
    });

    return () => unsub();
  }, [id]);

  const handleSubmit = useCallback(
    (value: string) => {
      id && postMessages(id, value, messages);
    },
    [id, messages]
  );

  return (
    <AppTemplate>
      <S.Container style={{ color: "white" }}>
        <S.List>
          {messages?.map((item) => (
            <GPTChatItem key={item.id} item={item} />
          ))}
          <S.SizedBox />
        </S.List>
        <GPTField handleSubmit={handleSubmit} />
      </S.Container>
    </AppTemplate>
  );
}
