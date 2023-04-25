import { Field, Form } from 'formik';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
`;

export const FormBox = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 70px;
  background: grey;
  box-shadow: -16px -16px 32px #fefefe;
  animation: ${fadeIn} 0.5s ease;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
`;

export const Text = styled.span`
  display: flex;
  gap: 5px;
  align-items: end;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease;

  &::placeholder {
    font-size: 20px;
  }
  &:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }
`;

export const ErrorMessageText = styled.p`
  text-align: center;
  margin-top: 10px;
  color: red;
  font-size: 17px;
`;

export const SubmitButton = styled.button`
  background-color: aquamarine;
  display: flex;
  width: 150px;
  min-height: 50px;
  font-size: 25px;
  margin-top: 40px;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 40px;
  box-shadow: 0 9px #999;

  &:hover {
    background-color: rgb(0, 255, 170);
    color: #ffffff;
  }

  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
