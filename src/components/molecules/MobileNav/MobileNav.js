import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  StyledLink,
} from "components/molecules/MobileNav/MobileNav.styled";

const MobileNav = ({ isOpen, onClick }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <StyledLink to="/" onClick={onClick}>
        blog
      </StyledLink>
      <StyledLink to="/about" onClick={onClick}>
        about
      </StyledLink>
      <StyledLink to="/contact" onClick={onClick}>
        contact
      </StyledLink>
    </Wrapper>
  );
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileNav;
