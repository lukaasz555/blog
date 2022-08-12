import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import Loader from "../Loader/Loader";

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

const Socials = (props) => {
  return (
    <Wrapper>
      {JSON.stringify(props.linked) === "" ? null : (
        <a href={props.linked}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      )}

      {JSON.stringify(props.twitter) === "" ? null : (
        <a href={props.twitter}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      )}

      {JSON.stringify(props.insta) === "" ? null : (
        <a href={props.insta}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      )}
    </Wrapper>
  );
};

export default Socials;
