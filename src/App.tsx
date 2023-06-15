import ChatHistory from "./components/ChatHistory";
import Chatting from "./components/Chatting";
import MainTemplate from "./components/template/MainTemplate";
import { GlobalStyle } from "./styles/globalStyle";
import exampleConversation from "./utils/chat";

function App() {
  exampleConversation()
  return (
    <>
      <GlobalStyle />
      <MainTemplate
        chatHistoryContent={<ChatHistory />}
        chattingContent={<Chatting />}
      ></MainTemplate>
    </>
  );
}

export default App;
