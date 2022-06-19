import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
