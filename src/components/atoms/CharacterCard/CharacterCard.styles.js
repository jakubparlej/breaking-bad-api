import styled from "styled-components";
import { Link } from "react-router-dom";

export const Name = styled.p`
  font-size: 1.6rem;
  margin-top: 1rem;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 10rem 1rem 1rem 1rem;
  background: linear-gradient(transparent, #041704);
  opacity: 0;
  transition: opacity 0.2s ease;
  font-family: "Corben";
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

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: white;
  position: relative;

  &:hover ${Name} {
    opacity: 1;
  }

  &:hover ${CardImg} {
    img {
      transform: scale(105%);
    }
  }
`;
