import styled, { css } from "styled-components";

export const LayoutContainer = styled.div`
  ${({ theme }) => css`
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;

    background: ${theme["gray-800"]};
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    @media (max-width: 620px) {
      padding: 1rem;

      background: ${theme["gray-900"]};
    }
  `}
`;
