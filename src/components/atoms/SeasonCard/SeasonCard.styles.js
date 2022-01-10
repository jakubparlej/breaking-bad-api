import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";

export const Season = styled.p`
  font-size: 1.6rem;
  margin-top: 1rem;
`;

export const CardImg = styled.div`
  width: 100%;
  height: calc(100% * 4 / 3);
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: white;
  position: relative;

  &:hover ${CardImg} {
    img {
      transform: scale(105%);
    }
  }
`;

export const Episodes = styled.p`
  font-size: 1rem;
  color: ${theme.color.lightGreen};
`;
