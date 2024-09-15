import React from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const FAQList = styled.div`
  width: 100%;
  max-width: 800px;
`;

const FAQItem = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Question = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Answer = styled.p`
  color: #666;
  line-height: 1.6;
`;

const FruitImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const FAQ = () => {
  const faqs = [
    {
      question: "What is Tangerine healthily?",
      answer: "Tangerines are a good source of vitamin C, which supports the immune system. They also contain fiber for digestive health and antioxidants that may help reduce inflammation.",
      image: "/api/placeholder/100/100"
    },
    {
      question: "How many calories are in a tangerine?",
      answer: "On average, a medium-sized tangerine contains about 47 calories. This can vary slightly depending on the size and specific variety of the fruit.",
      image: "/api/placeholder/100/100"
    },
  ];

  return (
    <FAQContainer>
      <Title>FAQ Section</Title>
      <FAQList>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FruitImage src={faq.image} alt="Tangerine" />
            <Question>{faq.question}</Question>
            <Answer>{faq.answer}</Answer>
          </FAQItem>
        ))}
      </FAQList>
    </FAQContainer>
  );
};

export default FAQ;