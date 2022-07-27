import React from "react";
import { StyledButton } from "./HamburgerButton.styles";
import PropTypes from "prop-types";

const HamburgerButton = ({ isOpen, setOpen }) => {
  return (
    <>
      <StyledButton isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledButton>
    </>
  );
};

HamburgerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default HamburgerButton;
