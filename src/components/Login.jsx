import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 2.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const InputIcon = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
`;

const TogglePassword = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
`;

const RememberForgot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const RememberMe = styled.label`
  display: flex;
  align-items: center;
  color: #666;
`;

const ForgotPassword = styled.a`
  color: #4a90e2;
  text-decoration: none;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', email, password);
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Subtitle>By signing in you are agreeing to our Terms and privacy policy</Subtitle>
      <form onSubmit={handleLogin}>
        <InputGroup>
          <InputIcon><FiMail /></InputIcon>
          <Input 
            type="email" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </InputGroup>
        <InputGroup>
          <InputIcon><FiLock /></InputIcon>
          <Input 
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <TogglePassword onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </TogglePassword>
        </InputGroup>
        <RememberForgot>
          <RememberMe>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember password</label>
          </RememberMe>
          <ForgotPassword href="#">Forgot password?</ForgotPassword>
        </RememberForgot>
        <LoginButton type="submit">Login</LoginButton>
      </form>
      <SocialLogin>
        <SocialButton><FaFacebookF /></SocialButton>
        <SocialButton><FaTwitter /></SocialButton>
        <SocialButton><FaGoogle /></SocialButton>
        <SocialButton><FaLinkedinIn /></SocialButton>
      </SocialLogin>
    </LoginContainer>
  );
};

export default Login;