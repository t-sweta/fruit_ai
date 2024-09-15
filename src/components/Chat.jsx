import React, { useState } from 'react';
import styled from 'styled-components';
import { FiSend } from 'react-icons/fi';
import { FaApple } from 'react-icons/fa';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #121212;
  color: white;
`;

const Header = styled.header`
  background-color: #1e1e1e;
  padding: 1rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  max-width: 80%;
  padding: 0.8rem 1rem;
  margin-bottom: 0.8rem;
  border-radius: 18px;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  background-color: ${props => props.isUser ? '#4a4a4a' : '#2a2a2a'};
`;

const FruitCard = styled.div`
  background-color: #2a2a2a;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  max-width: 80%;
`;

const FruitIcon = styled(FaApple)`
  width: 50px;
  height: 50px;
  color: #ff6347;
  margin-right: 1rem;
`;

const FruitInfo = styled.div`
  flex: 1;
`;

const FruitName = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

const FruitCalories = styled.p`
  margin: 0.2rem 0 0;
  font-size: 0.8rem;
  color: #888;
`;

const InputArea = styled.form`
  display: flex;
  padding: 1rem;
  background-color: #1e1e1e;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: none;
  border-radius: 20px;
  background-color: #2a2a2a;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #4a4a4a;
  }
`;

const SendButton = styled.button`
  background-color: #4a4a4a;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a5a5a;
  }
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      // Simulating a response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Here's some information about apples:", isUser: false }, { fruit: true }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <ChatContainer>
      <Header>Chat</Header>
      <MessageList>
        {messages.map((message, index) => (
          message.fruit ? (
            <FruitCard key={index}>
              <FruitIcon />
              <FruitInfo>
                <FruitName>Apple</FruitName>
                <FruitCalories>Calories: 95</FruitCalories>
              </FruitInfo>
            </FruitCard>
          ) : (
            <Message key={index} isUser={message.isUser}>
              {message.text}
            </Message>
          )
        ))}
      </MessageList>
      <InputArea onSubmit={handleSend}>
        <Input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <SendButton type="submit">
          <FiSend />
        </SendButton>
      </InputArea>
    </ChatContainer>
  );
};

export default Chat;