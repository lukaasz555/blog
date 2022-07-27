import React from "react";
import { StyledButton } from "components/atoms/Button/Button.styles";

const Button = ({ arts, onClick, content }) => (
  <StyledButton onClick={onClick} content={content}>
    {content}
  </StyledButton>
);
export default Button;
