import { atom } from "recoil";

interface HistoryItemTypes {
  id: string;
  title: string;
  messages: {
    id: string;
    role: "user" | "assistant";
    content: string;
  }[];
}

const HistoryItemsData = <HistoryItemTypes[]>[
  {
    id: "123",
    title: "adsfasdfaasdfasdfasdfsdf",
    messages: [
      { id: "123", role: "user", content: "Hi, How are you?" },
      { id: "124", role: "assistant", content: "How can I help you today?" },
      { id: "125", role: "user", content: "Hi, How are you?" },
      { id: "126", role: "assistant", content: "How can I help you today?" },
      { id: "127", role: "user", content: "Hi, How are you?" },
      { id: "128", role: "assistant", content: "How can I help you today?" },
    ],
  },
  {
    id: "234",
    title: "qwerqwerqwerqwreqwerqwer",
    messages: [
      { id: "234", role: "user", content: "What's up?" },
      { id: "235", role: "assistant", content: "How can I assist you today?" },
      { id: "236", role: "user", content: "What's up?" },
      { id: "237", role: "assistant", content: "How can I assist you today?" },
      { id: "238", role: "user", content: "What's up?" },
      { id: "239", role: "assistant", content: "How can I assist you today?" },
    ],
  },
  {
    id: "345",
    title: "zxczxczxzxvczxcvzxcvc",
    messages: [
      { id: "345", role: "user", content: "Can you speak Korean?" },
      { id: "346", role: "assistant", content: "무엇을 도와드릴까요?" },
      { id: "347", role: "user", content: "Can you speak Korean?" },
      { id: "348", role: "assistant", content: "무엇을 도와드릴까요?" },
      { id: "349", role: "user", content: "Can you speak Korean?" },
      { id: "350", role: "assistant", content: "무엇을 도와드릴까요?" },
    ],
  },
];

const HistoryItemsState = atom({
  key: "HistoryItemsState",
  default: HistoryItemsData,
});

export default HistoryItemsState;
