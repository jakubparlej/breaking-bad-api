import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.25rem;

  ${theme.media.xlarge} {
    grid-template-columns: repeat(5, 1fr);
  }

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

export const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${theme.color.black};
  width: 100%;
  height: 100%;
  z-index: 99;
  display: grid;
  place-content: center;

  img {
    width: 50px;
  }
`;
