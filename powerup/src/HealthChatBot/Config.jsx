import { createChatBotMessage } from "react-chatbot-kit";
import { AiFillRobot } from 'react-icons/ai';

const config = {
  initialMessages: [createChatBotMessage(`Hello, I am HealthBot! I can give you health advice based on your symptoms. What symptoms are you experiencing?`)],
  botName: "HealthBot",
  botAvatar: <AiFillRobot/>,
  
}

export default config