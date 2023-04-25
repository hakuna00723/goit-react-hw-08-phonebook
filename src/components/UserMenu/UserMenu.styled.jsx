import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: #000000;
`;

export const Button = styled.button`
  background-color: aquamarine;
  display: flex;
  width: 120px;
  height: 40px;
  font-size: 25px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 40px;
  box-shadow: 0 5px #999;

  &:hover {
    background-color: rgb(0, 255, 170);
    color: #ffffff;
  }

  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
