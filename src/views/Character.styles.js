import styled from "styled-components";
import { theme } from "../assets/styles/theme";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 5rem;
  padding: 5rem 0;

  ${theme.media.medium} {
    grid-template-columns: 1fr;
    padding: 2rem 0;
  }
`;

export const Img = styled.div`
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  ::after {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    left: 50%;
    background: linear-gradient(90deg, transparent, rgb(0, 0, 0));

    ${theme.media.medium} {
      width: 100%;
      top: 50%;
      height: 50%;
      left: 0;
      background: linear-gradient(transparent, rgb(0, 0, 0));
    }
  }
`;

export const Info = styled.div`
  padding: 5rem 0;
  position: relative;

  ${theme.media.medium} {
    padding: 0;
    margin-top: -5rem;
  }

  h1 {
    margin-bottom: 4rem;
  }

  h2 {
    margin-bottom: 2rem;
  }
`;

export const Table = styled.div`
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 50%);

  ${theme.media.small} {
    grid-template-columns: 100%;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  font-size: 1.5rem;
  color: ${theme.color.lightGreen};

  span:first-of-type {
    color: ${theme.color.white};
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export const Nickname = styled.p`
  font-size: 2rem;
  color: ${theme.color.lightGreen};
`;

export const Quote = styled.div`
  margin-bottom: 4rem;

  div {
    margin-bottom: 1rem;
  }

  p {
    font-family: "Corben";
    color: ${theme.color.lightGreen};
    font-size: 1.5rem;
  }
`;
