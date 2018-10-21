import styled, { keyframes } from 'styled-components';

const progressPulse = keyframes`
  0% { background-color: #dfb746; }
  50% { background-color: #fbd874; }
  100% { background-color: #dfb746; }
`;

export const Container = styled.div`
  width: 100%;
  height: 4px;
  opacity: ${props => props.visible ? 1 : 0};
`;

export const Fill = styled.div`
  background-color: #dfb746;
  width: 100%;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 0 7px #dfb746;
  transform-origin: left;
  transform: scale3d(${props => props.progress}, 1, 1);
  transition: transform 0.2s ease-in-out;
  animation: ${progressPulse} 1s linear infinite;
`;
