import styled, { css } from 'styled-components'
import { theme } from 'styles'

interface IProps {
  active?: boolean
  puzzle?: boolean
  highlighted?: boolean
}

export const Container = styled.div<IProps>`
  ${({ theme, active, puzzle, highlighted }) => css`
    background-color: ${active ? theme.colors.blue : theme.colors.white};
    ${highlighted && !active && 'background-color: ' + theme.colors.lightBlue};
    border: solid 1px ${theme.colors.black};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-weight: ${puzzle ? 'bold' : 'normal'};
    font-size: 20px;
    height: auto;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.blue};
    }
  `}
`
