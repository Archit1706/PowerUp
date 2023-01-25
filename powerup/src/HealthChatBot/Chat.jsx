import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import { useEffect } from 'react';
import './Chat.css'
import './ChatMessage.css'
import './UserMessage.css'
import './ErrorMessage.css'
import config from "./Config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const handleUserMessage = (message, botMessage) => {
  // Do something with the message
  console.log(message);

  // Send a message back to the user
  botMessage("Hello, thanks for your message!");
}

const HealthChatBot = () => {
  const header = document.getElementsByClassName("react-chatbot-kit-chat-header")[0];
  
  return (
    <center>
    <div>
      {window.innerWidth > 575 ? (
      <div className="mockup-phone">
  <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        handleUserMessage={handleUserMessage}
        actionProvider={ActionProvider}
      />
    </div>
  </div>
</div>
      ): (
      <Chatbot
        config={config}
        messageParser={MessageParser}
        handleUserMessage={handleUserMessage}
        actionProvider={ActionProvider}
      />
      )}
    </div></center>
  )
}

export default HealthChatBot;

/*
const timelineitem = document.createElement("div");
    timelineitem.className="timeline-item";
    
    const timelineimg = document.createElement("div");
    timelineimg.className="timeline-img";
    timelineitem.appendChild(timelineimg);
    
    const timelinetran = document.createElement("div");
    if(side){
        timelinetran.className="js--fadeInLeft timeline-content";
    }else{
        timelinetran.className="js--fadeInRight timeline-content";
    }
    side=!side;
    if(data[i].type==1){
        const image= document.createElement("div");
        timelinetran.className+=" timeline-card";
        image.className = "timeline-img-header";
        image.style.background = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url("${data[i].image}") center center no-repeat`;
        image.style.backgroundSize="cover";
        const head = document.createElement("h2");
        head.innerHTML=data[i].title;
        image.appendChild(head);
        timelinetran.appendChild(image);
    }else{
        const head = document.createElement("h2");
        head.innerHTML=data[i].title;
        timelinetran.appendChild(head);
    }
    const date = document.createElement("div");
    date.className="date";
    date.innerHTML=data[i].date;
    timelinetran.appendChild(date);
    if(data[i].type==2){
        const desc = document.createElement("blockquote");
        desc.innerHTML=data[i].desc;
        timelinetran.appendChild(desc);
    }else{
        const desc = document.createElement("p");
        desc.innerHTML=data[i].desc;
        timelinetran.appendChild(desc);
    }
    
    if(data[i].link!="NONE"){
        const button = document.createElement("a");
        button.className="bnt-more";
        button.innerHTML="More";
        button.target ="_blank";
        button.href = data[i].link;
        timelinetran.appendChild(button);
    }
    
    timelineitem.appendChild(timelinetran);
    document.getElementById("timeline").appendChild(timelineitem);
*/