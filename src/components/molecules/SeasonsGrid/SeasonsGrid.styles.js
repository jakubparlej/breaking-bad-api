import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

  ${theme.media.large} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${theme.media.medium} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${theme.media.small} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
