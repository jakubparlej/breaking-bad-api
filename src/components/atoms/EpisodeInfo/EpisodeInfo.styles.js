import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";

export const Col = styled.div`
  color: ${theme.color.white};
  transition: color 0.2s ease;
`;

export const Link = styled.a`
  text-align: right;
  color: ${theme.color.white};
  transition: color 0.2s ease;
`;

export const Row = styled.a`
  width: 100%;
  display: grid;
  padding: 1rem;
  font-size: 1.25rem;
  grid-template-columns: 50px 50% 20% 1fr;
  row-gap: 1rem;
  border-radius: 3px;
  transition: background 0.2s ease;

  ${theme.media.medium} {
    font-size: 1rem;
    grid-template-columns: 30px 60% 30% 1fr;
  }

  :hover {
    background: rgba(255, 255, 255, 0.1);

    ${Col},${Link} {
      color: ${theme.color.lightGreen};
    }
  }

  img {
    margin: 0 1rem;
    width: 30px;
    height: 30px;
  }
`;
