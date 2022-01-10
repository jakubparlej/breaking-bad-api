import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 5rem;
`;

export const Img = styled.div`
  img {
    border-radius: 5px;
    height: 80%;
  }
`;

export const Info = styled.div`
  padding: 4rem 0;

  h1 {
    margin-bottom: 4rem;
  }
`;

export const Table = styled.div`
  margin-bottom: 5rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  width: 100%;
`;
