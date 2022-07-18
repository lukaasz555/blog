import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
  text-align: left;

  .paginationButtons {
    display: flex;
    justify-content: center;
    margin: 3em auto;
    list-style: none;

    .page-item {
      background-color: rgba(255, 255, 255, 0.23);
      margin: 10px;
      cursor: pointer;
      transition: all 0.25s;
      padding: 5px 10px;
      height: 30px;
      border-radius: 8px;
    }

    .active {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.black};
    }
  }
`;
