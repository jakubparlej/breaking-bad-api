import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: white;
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

    &:hover {
      transform: scale(105%);
    }
  }
`;

export const Name = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
`;
