import styled from 'styled-components';

export const ListElem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const Button = styled.button`
  background-color: pink;
  display: flex;
  width: 80px;
  min-height: 80px;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  box-shadow: 0 9px #999;

  &:hover {
    background-color: #f7667e;
    color: #ffffff;
  }

  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
