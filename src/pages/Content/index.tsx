import { Navigate, useParams } from "react-router-dom";
import * as S from "./style";
import ChatItem from "@/components/ChatItem";
import InputField from "@/components/InputField";
import { useEffect, useState } from "react";
import AppTemplate from "@/templates/AppTemplate";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "@/services/firebase";
import useGenerateChat from "@/hooks/useGenerateChat";

export default function Content() {
  const { id } = useParams();
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string; mid: string }[]
  >([]);

  const [isMyChat, setIsMyChat] = useState(true);

  useEffect(() => {
    if (!id) return;
    onSnapshot(doc(db, "history", id), (doc) => {
      if (!(doc.exists() && doc.data().uid === auth.currentUser?.uid)) {
        setIsMyChat(false);
      }
    });
    const unsub = onSnapshot(doc(db, "chat", id), (doc) => {
      const data = doc.data()?.messages;
      if (data && isMyChat) {
        setMessages(data);
      }
    });

    return () => unsub();
  }, [id, isMyChat]);

  const handleSubmit = useGenerateChat(id, messages);

  return (
    <AppTemplate>
      <S.Container style={{ color: "white" }}>
        <S.List>
          {isMyChat ? (
            messages?.map((item, idx) => (
              <ChatItem
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
        <InputField id={id} handleSubmit={handleSubmit} />
      </S.Container>
    </AppTemplate>
  );
}
