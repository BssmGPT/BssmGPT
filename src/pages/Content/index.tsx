import { Navigate, useParams } from "react-router-dom";
import * as S from "./style";
import ChatItem from "@/components/ChatItem";
import InputField from "@/components/InputField";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "@/services/firebase";
import useGenerateChat from "@/hooks/useGenerateChat";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loadingState, valueState } from "@/recoil/gptField.atom";

export default function Content() {
  const { id } = useParams();

  const value = useRecoilValue(valueState);
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string; mid: string }[]
  >([]);
  const setLoading = useSetRecoilState(loadingState);

  const [isMyChat, setIsMyChat] = useState(true);

  useEffect(() => {
    if (!id) return;
    const unsubHistory = onSnapshot(doc(db, "history", id), (doc) => {
      if (!(doc.exists() && doc.data().uid === auth.currentUser?.uid)) {
        setIsMyChat(false);
      }
    });
    const unsubChat = onSnapshot(doc(db, "chat", id), (doc) => {
      const data = doc.data()?.messages;
      if (data && isMyChat) {
        setMessages(data);
      }
    });

    return () => {
      console.log("test");
      unsubHistory();
      unsubChat();
    };
  }, [id, isMyChat]);

  const addNewChat = useGenerateChat();

  const handleSubmit = async () => {
    setLoading(true);
    await addNewChat(id as string, value, messages);
    setLoading(false);
  };

  return (
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
  );
}
