import { createChatBotMessage } from "react-chatbot-kit";
import { AiFillRobot } from 'react-icons/ai';

const config = {
  initialMessages: [createChatBotMessage(`Hello, I am the DietBot! I can give you dietary advice such as an optimal breakfast plan, how much water should you drink?, etc. Feel free to ask me anything`)],
  botName: "DietBot",
  botAvatar: <AiFillRobot/>,
  
}

export default config