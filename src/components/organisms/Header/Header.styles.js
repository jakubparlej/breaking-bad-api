import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";

export const Background = styled.div`
  img {
    width: 70%;
    position: absolute;
    right: 0;
    z-index: -1;

    ${theme.media.medium} {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.color.white};
  padding: 15rem 0 10rem 0;
  /* max-width: 38rem; */
  max-width: 50%;

  ${theme.media.medium} {
    padding: 13rem 0 5rem 0;
    max-width: 100%;
  }
`;

export const Genres = styled.ul`
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 1rem 0 2rem 0;

  li {
    padding: 2px 6px;
    background: ${theme.color.darkGreen};
    border-radius: 3px;
  }
`;

export const Description = styled.p`
  font-size: 1.25rem;
`;
