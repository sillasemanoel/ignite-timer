import styled, { css } from "styled-components";

export const CountdownContainer = styled.div`
  ${({ theme }) => css`
    font-family: "Roboto Mono", monospace;
    font-size: 10rem;

    line-height: 8rem;

    @media (max-width: 620px) {
      font-size: 5rem;
      line-height: 5rem;
    }

    color: ${theme["gray-100"]};
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    span {
      background: ${theme["gray-700"]};
      padding: 2rem 1rem;

      border-radius: 8px;

      @media (max-width: 620px) {
        padding: 1rem 0.5rem;
      }
    }
  `}
`;

export const Separator = styled.div`
  ${({ theme }) => css`
    padding: 2rem 0;
    color: ${theme["green-500"]};

    width: 4rem;
    overflow: hidden;

    @media (max-width: 620px) {
      font-size: 3rem;
      width: 0;
    }

    display: flex;
    justify-content: center;
  `}
`;
