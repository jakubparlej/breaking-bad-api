import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
export const Header = styled.div`
  width: 100%;
  display: grid;
  padding: 1rem;
  grid-template-columns: 50px 50% 20% 1fr;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ${theme.media.medium} {
    grid-template-columns: 30px 60% 30% 1fr;
  }

  div {
    color: rgba(255, 255, 255, 0.5);
  }

  div:last-of-type {
    text-align: right;
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 4rem 0;
`;
