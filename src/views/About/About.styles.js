import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 60px;

  img {
    height: 100%;
    width: 300px;
    float: left;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
    margin-top: 20px;
    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }

  img,
  h3 {
    margin-top: 20px;
    text-align: center;
  }

  div:nth-child(2) {
    width: 80%;
    padding-bottom: 1em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }

  div:nth-child(3) {
    flex-basis: 95%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 768px) {
    h3 {
      text-align: left;
    }

    div {
      flex-basis: 50%;
    }

    div:nth-child(3) {
      justify-content: flex-end;
    }
  }
`;
