import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
  width: 240px;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Logo = styled.h1`
  color: #10b981;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: inherit;
  background-color: ${props => props.active ? '#d1fae5' : 'transparent'};
  border-radius: 0.25rem;

  ${props => props.as === 'div' && `
    cursor: pointer;
  `}
  &.active {
    background-color: #d1fae5;
    color: #10b981;
  }

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 0.75rem;
  min-width: 18px;
`;

export const LogoutButton = styled.button`
  margin-top: auto;
  padding: 0.75rem;
  background-color: #10b981;
  color: white;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #059669;
  }

  span {
    margin-left: 0.75rem;
  }
`;

export const SubMenu = styled.div`
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`;

export const SubMenuItem = styled(NavLink)`
  display: block;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  color: inherit;
  font-size: 0.9rem;

  &:hover {
    background-color: #f3f4f6;
  }

  &.active {
    color: #10b981;
  }
`;