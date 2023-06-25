import { atom } from "recoil";

interface GPTHomeContentTypes {
  keyWord: string;
  descriptions: string[];
  type?: "button";
}

export default <GPTHomeContentTypes[]>[
  {
    keyWord: "Examples",
    descriptions: [
      '"Explain quantum computing in simple terms" →',
      '"Got any creative ideas for a 10 year old’s birthday?" →',
      '"How do I make an HTTP request in Javascript?" →',
    ],
    type: "button",
  },
  {
    keyWord: "Capabilities",
    descriptions: [
      "Remembers what user said earlier in the conversation",
      "Allows user to provide follow-up corrections",
      "Trained to decline inappropriate requests",
    ],
  },
  {
    keyWord: "Limitations",
    descriptions: [
      "May occasionally generate incorrect information",
      "May occasionally produce harmful instructions or biased content",
      "Limited knowledge of world and events after 2021",
    ],
  },
];
