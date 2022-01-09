import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const Wrapper = styled.div`
  padding-left: 6.25rem;
  padding-right: 6.25rem;

  ${theme.media.small} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
