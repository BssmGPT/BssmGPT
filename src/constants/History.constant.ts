import { atom } from "recoil";

interface HistoryItemTypes {
  id: string;
  title: string;
  chat: {
    id: string;
    role: "user" | "gpt";
    content: string;
  }[];
}

const HistoryItemData = <HistoryItemTypes[]>[
  {
    id: "123",
    title: "adsfasdfaasdfasdfasdfsdf",
    chat: [
      { id: "123", role: "user", content: "Hi, How are you?" },
      { id: "124", role: "gpt", content: "How can I help you today?" },
      { id: "125", role: "user", content: "Hi, How are you?" },
      { id: "126", role: "gpt", content: "How can I help you today?" },
      { id: "127", role: "user", content: "Hi, How are you?" },
      { id: "128", role: "gpt", content: "How can I help you today?" },
    ],
  },
  {
    id: "234",
    title: "qwerqwerqwerqwreqwerqwer",
    chat: [
      { id: "234", role: "user", content: "What's up?" },
      { id: "235", role: "gpt", content: "How can I assist you today?" },
      { id: "236", role: "user", content: "What's up?" },
      { id: "237", role: "gpt", content: "How can I assist you today?" },
      { id: "238", role: "user", content: "What's up?" },
      { id: "239", role: "gpt", content: "How can I assist you today?" },
    ],
  },
  {
    id: "345",
    title: "zxczxczxzxvczxcvzxcvc",
    chat: [
      { id: "345", role: "user", content: "Can you speak Korean?" },
      { id: "346", role: "gpt", content: "무엇을 도와드릴까요?" },
      { id: "347", role: "user", content: "Can you speak Korean?" },
      { id: "348", role: "gpt", content: "무엇을 도와드릴까요?" },
      { id: "349", role: "user", content: "Can you speak Korean?" },
      { id: "350", role: "gpt", content: "무엇을 도와드릴까요?" },
    ],
  },
];

const HistoryItemState = atom({
  key: "HistoryItemState",
  default: HistoryItemData,
});

export default HistoryItemState;
