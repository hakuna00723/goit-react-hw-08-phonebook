import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const FormStylized = styled(Form)`
display: flex;
flex-direction: column;
padding: 20px;
align-items: center;
gap: 10px;
font-size: 20px;
margin-bottom: 50px;
`;

export const FieldStylized = styled(Field)`
display: block;
width: 600px;
height: 30px;
padding-left: 10px;
font-size: 20px;
border-radius: 10px;
`;

export const AddContBtn = styled.button`
  background-color: aquamarine;
  display: flex;
  width: 200px;
  min-height: 70px;
  font-size: 25px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 40px;
  box-shadow: 0 9px #999;

  &:hover{
    background-color: rgb(0, 255, 170);
  color: #ffffff;
  }

  &:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
`;

