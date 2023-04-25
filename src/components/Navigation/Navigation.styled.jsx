import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  text-decoration: none;
`;
