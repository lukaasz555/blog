import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 1em;
  a {
    color: rgba(0, 0, 0, 0.4);
    font-size: ${({ theme }) => theme.fontSize.l};
    transition: color 0.2s;

    &:hover {
      color: rgba(0, 0, 0, 0.9);
    }
  }

  a {
    margin: 0 0.5em;
  }

  a:first-child {
    margin-left: 0;
  }
`;

const Socials = () => (
  <Wrapper>
    <a href="https://www.linkedin.com/in/%C5%82ukasz-zegar/">
      <FontAwesomeIcon icon={faLinkedinIn} />
    </a>

    <a href="https://twitter.com/djuk_77">
      <FontAwesomeIcon icon={faTwitter} />
    </a>

    <a href="https://instagram.com/lukaasz555">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </Wrapper>
);

export default Socials;
