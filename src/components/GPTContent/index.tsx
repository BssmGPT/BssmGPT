import { useParams } from "react-router-dom";
import * as S from "./style";
import GPTChatItem from "@/components/common/GPTChat";
import GPTField from "../common/GPTField";
import { useCallback, useEffect, useState } from "react";
import AppTemplate from "@/templates/AppTemplate";
import getChatById from "@/utils/getChatById";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/services/firebase";

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
    // getChatById(id).then((data) => {
    //   if (Array.isArray(data)) {
    //     setMessages(data);
    //   }
    // });

    return () => unsub();
  }, []);

  const handleSubmit = useCallback(async (value: string) => {}, []);

  return (
    <AppTemplate>
      <S.Container style={{ color: "white" }}>
        <S.List>
          {messages?.map((item) => (
            <GPTChatItem key={item.id} item={item} />
          ))}
        </S.List>
        <GPTField handleSubmit={handleSubmit} />
      </S.Container>
    </AppTemplate>
  );
}
