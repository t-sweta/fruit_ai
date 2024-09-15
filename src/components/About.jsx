import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
  min-height: 100vh;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
`;

const DeveloperTag = styled.div`
  background-color: #ff69b4;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  margin-top: 1rem;
  align-self: flex-start;
`;

const About = () => {
  return (
    <AboutContainer>
      <Card>
        <Title>Fruit.Ai</Title>
        <Description>
          Fruit.Ai is an innovative health management application that leverages artificial intelligence to provide personalized nutrition advice. Our chat feature allows users to ask questions about various fruits and their health benefits, while our translator helps break down language barriers in accessing nutritional information.
        </Description>
        <Description>
          Whether you're looking to improve your diet, learn more about the fruits you love, or discover new healthy options, Fruit.Ai is here to assist you on your journey to better health.
        </Description>
        <DeveloperTag>Shreya Shukla</DeveloperTag>
      </Card>
    </AboutContainer>
  );
};

export default About;