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

const Socials = (linked = null, twitter = null, insta = null) => {
  console.log(insta);
  return (
    <Wrapper>
      {typeof linked == undefined
        ? console.log("LINKED - undefined")
        : console.log(typeof linked)}
      {/* 
      {JSON.stringify(linked).includes("http") ? null : (
        <a href={Object.values(linked)}>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      )}

     {twitter == {} ? null : (
        <a href={Object.values(twitter)}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      )} 

      {JSON.stringify(insta).includes("http") ? null : (
        <a href={Object.values(insta)}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      )}
      */}
    </Wrapper>
  );
};

export default Socials;
