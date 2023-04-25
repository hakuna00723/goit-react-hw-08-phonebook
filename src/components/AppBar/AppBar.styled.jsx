import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: -1px;
  padding: 15px 30px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  border-bottom: 5px;
  box-shadow: 0px 10px 20px -2px rgba(0, 255, 195, 0.5);

  & a {
    color: #000000;
  }

  & a.active {
    padding: 10px;
    color: aquamarine;
    border-radius: 30px;
    background: grey;
  }

  & a.active svg {
    display: block;
  }
`;
