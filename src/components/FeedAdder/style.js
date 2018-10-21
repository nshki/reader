import styled from 'styled-components';

export const Form = styled.form`
  background-color: #2b2b2b;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.3);
  font-family: inherit;
  font-size: 1rem;
  color: #fff;
  display: block;
  width: 100%;
  padding: 7px 10px;
  border: none;
  border-radius: 3px;
  outline: none;
  transition: background-color 0.3s ease-in-out;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.3s ease-in-out;
  }

  &:focus {
    background-color: #fff;
    color: #2b2b2b;
  }

  &:focus::placeholder {
    color: #777;
  }
`;
