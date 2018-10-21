import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  padding: 20px 15px;
  border-radius: 3px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.05);
`;

export const Heading = styled.h4`
  margin: 0 auto 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Action = styled(Link)`
  background-color: #4673df;
  min-width: 40px;
  margin-left: 5px;
  padding: 10px 0;
  border: none;
  border-radius: 3px;
  outline: none;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 0.1em;
  line-height: 1;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #244fb7;
  }

  ${props => props.altColor && css`
    background-color: #ff4500;

  &:hover {
    background-color: #cc4500;
  }
  `}
`;
