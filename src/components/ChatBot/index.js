import React, { useState } from 'react';
import './index.css'; // Import your CSS file

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

  const sendMsgToChatbot = () => {
    if (!inputText.trim()) return;

    setMessages([...messages, { text: inputText, sender: 'user' }]);
    setInputText('');

    setTimeout(() => {
      setMessages([
        ...messages,
        { text: getReplayFromCB(), sender: 'bot' }
      ]);
    }, 500);
  };

  const getReplayFromCB = () => {
    const length = chatbotMsgList.length;
    const msgNumber = Math.floor(Math.random() * length);
    return chatbotMsgList[msgNumber];
  };

  return (
    <div className="p-2">
      <h1 className="text-center chatbot-heading">Meet our Chatbot</h1>
      <img className="image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-bot-img.png" alt="Bot" />
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`msg-${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="d-flex flex-row justify-content-end">
        <img className="image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-boy-img.png" alt="User" />
      </div>
      <div className="d-flex flex-row justify-content-center fixed-bottom">
        <input
          className="user-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="send-msg-btn" onClick={sendMsgToChatbot}>
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
