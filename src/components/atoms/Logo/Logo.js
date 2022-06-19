import React from "react";
import { Wrapper, StyledLink } from "components/atoms/Logo/Logo.styled";

const Logo = () => (
  <Wrapper>
    <StyledLink to="/">
      <h1>John Doe's blog</h1>
      <h2>stock markets, cryptocurrencies</h2>
    </StyledLink>
  </Wrapper>
);

export default Logo;
