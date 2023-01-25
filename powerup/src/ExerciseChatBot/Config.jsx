import { createChatBotMessage } from "react-chatbot-kit";
import { AiFillRobot } from 'react-icons/ai';

const config = {
  initialMessages: [createChatBotMessage(`Hello, I am the ExerciseBot! I use your health information to suggest workouts. What bodypart do you want to focus on?`)],
  botName: "ExerciseBot",
  botAvatar: <AiFillRobot/>,
  
}

export default config