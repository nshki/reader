import styled from 'styled-components';

export const Container = styled.a`
  background-color: #fff;
  display: block;
  margin: 15px 0;
  padding: 30px 15px;
  position: relative;
  border-radius: 3px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  @media (min-width: 555px) {
    &:hover {
      transform: translate3d(0, -4px, 0);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const Heading = styled.h3`
  line-height: 1.4;
  font-weight: 600;
  font-size: 1rem;
  color: #444;
  margin: 0;

  @media (min-width: 555px) {
    font-size: 1.17rem;
  }
`;

export const Meta = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  color: #999;
  margin: 10px 0 0 0;
`;
