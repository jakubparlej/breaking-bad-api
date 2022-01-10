import styled from "styled-components";
import { theme } from "../assets/styles/theme";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 5rem;
  padding: 5rem 0;
`;

export const Img = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const Info = styled.div`
  padding: 4rem 0;

  h1 {
    margin-bottom: 4rem;
  }

  h2 {
    margin-bottom: 2rem;
  }
`;

export const Table = styled.div`
  margin-bottom: 5rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  width: 100%;
  margin: 1rem 0;
  font-size: 1.5rem;

  span:last-of-type {
    color: ${theme.color.lightGreen};
  }
`;
