import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";

export const Wrapper = styled.div`
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
    width: 100%;
    transform: scale(50%);
  }
`;
