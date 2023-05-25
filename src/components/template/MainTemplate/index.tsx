import { ReactNode } from "react";
import { ChatHistoryFrame, ChattingFrame, TemplateBox } from "./style";

interface MaintemplateProptypes {
  chatHistoryContent: ReactNode;
  chattingContent: ReactNode;
}

export default function MainTemplate(props: MaintemplateProptypes) {
  return (
    <TemplateBox>
      <ChatHistoryFrame>{props.chatHistoryContent}</ChatHistoryFrame>
      <ChattingFrame>{props.chattingContent}</ChattingFrame>
    </TemplateBox>
  );
}
