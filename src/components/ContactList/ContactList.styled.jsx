import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
