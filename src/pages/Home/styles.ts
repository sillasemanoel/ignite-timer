import styled, { css } from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;

    max-width: 100%;
    overflow: hidden;
  }
`;

const BaseCountdownButton = styled.button`
  ${({ theme }) => css`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;
    font-weight: bold;

    color: ${theme["gray-100"]};

    cursor: pointer;

    transition: background ease-in-out 0.2s;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `}
`;
export const StartCountdownButton = styled(BaseCountdownButton)`
  ${({ theme }) => css`
    background: ${theme["green-500"]};

    &:hover:not(:disabled) {
      background: ${theme["green-700"]};
    }
  `}
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  ${({ theme }) => css`
    background: ${theme["red-500"]};

    &:hover:not(:disabled) {
      background: ${theme["red-700"]};
    }
  `}
`;
