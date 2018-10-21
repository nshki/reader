import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  background-color: #2b2b2b;
  padding: 10px 0;
  position: sticky;
  z-index: 2;
  top: 0;
  color: #fff;

  @media (min-width: 555px) {
    padding: 10px 0 15px 0;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 3px 20px 10px;
`;

export const Logo = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
`;

export const Svg = styled.svg`
  fill: #fff;
  width: 12px;
  height: 12px;
  margin-right: 5px;
  transform: translateY(-2px);
  vertical-align: middle;
`;

export const Nav = styled.nav`
  margin: 0;
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  margin: 0 5px;
  padding: 0;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1em;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const ProgressContainer = styled.div`
  position: absolute;
  bottom: -2.5px;
  left: 0;
  right: 0;
`;
