import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //border: 2px solid lightblue;
  /* 
  input,
  textarea {
    min-width: 200px;
  }

  input {
    margin: 1em 0;
  }


  input[type="email"] {
    margin: 2em 0;
  }*/
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 360px;
  margin: 2em 0;
  //background-color: lightgoldenrodyellow;

  input {
    padding-bottom: 0.75em;
  }

  input,
  textarea {
    border: none;
    outline: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.35);
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 0;
    transition: all 0.25s;

    &:focus {
      border-bottom: 2px solid rgba(0, 0, 0, 1);
    }

    &:focus > label {
      font-size: 7px;
    }
  }

  textarea {
    padding-bottom: 0.75em;
    resize: none;
    overflow: auto;
    font-family: "Montserrat", sans-serif;
  }

  label {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 1em;
  }
`;
