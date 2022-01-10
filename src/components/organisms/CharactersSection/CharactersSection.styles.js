import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h2 {
    color: ${theme.color.lightGreen};
  }
`;
