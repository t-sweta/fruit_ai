import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaComments, FaLanguage, FaQuestionCircle, FaInfoCircle } from 'react-icons/fa';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2, #80deea, #4dd0e1);
  padding: 1rem;
`;

const AppTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.color};
`;

const Home = () => {
  return (
    <HomeContainer>
      <AppTitle>Fruit.Ai</AppTitle>
      <NavGrid>
        <NavItem to="/chat">
          <IconWrapper color="#FFD700">
            <FaComments />
          </IconWrapper>
          Chat
        </NavItem>
        <NavItem to="/translator">
          <IconWrapper color="#98FB98">
            <FaLanguage />
          </IconWrapper>
          Translator
        </NavItem>
        <NavItem to="/faq">
          <IconWrapper color="#87CEFA">
            <FaQuestionCircle />
          </IconWrapper>
          FAQs
        </NavItem>
        <NavItem to="/about">
          <IconWrapper color="#FFA07A">
            <FaInfoCircle />
          </IconWrapper>
          About
        </NavItem>
      </NavGrid>
    </HomeContainer>
  );
};

export default Home;