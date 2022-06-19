import React from "react";
import { StyledButton } from "components/atoms/BtnReadMore/BtnReadMore.styled";

const BtnReadMore = ({ arts, onClick }) => (
  <StyledButton onClick={onClick}>Read more</StyledButton>
);

export default BtnReadMore;
