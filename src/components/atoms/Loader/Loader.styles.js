import styled from "styled-components";

export const StyledLoader = styled.div`
  width: 100px;
  height: 6px;
  background-color: #000;
  position: relative;
  overflow: hidden;
  border-radius: 40px;
  margin: 80px auto;

  span {
    background-color: rgba(255, 255, 255, 0.55);
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 20px;
    border-radius: 40px;
    animation: loader 1s infinite linear alternate;
  }

  @keyframes loader {
    0% {
      width: 0px;
    }

    20% {
      width: 0px;
    }
    80% {
      width: 100px;
    }

    100% {
      width: 100px;
    }
  }
`;
