import styled from "styled-components";

export const Textarea = styled.textarea`
  resize: vertical;
  max-width: 400px;
  min-width: 250px;
  min-height: 200px;
  margin: 20px 0;
  border: 2px solid rgba(0, 0, 0, 0.55);
  transition: border 0.35s;
  border-radius: 10px;
  padding: 15px 10px;
  font-family: "Montserrat", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  &:focus {
    border: 2px solid rgba(0, 0, 0, 1);
    outline: none;
  }
`;
