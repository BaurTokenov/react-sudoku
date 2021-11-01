import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.black};
    border: 2px solid ${theme.colors.black};
    border-radius: 4px;
    color: ${theme.colors.white};
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    margin: 4px 2px;
    min-height: 40px;
    opacity: 0.9;
    padding: 0;
    transition: ${theme.transition};

    &:focus {
      border-color: ${theme.colors.blue};
      outline: none;
    }
    &:hover {
      opacity: 0.6;
    }
  `}
`
