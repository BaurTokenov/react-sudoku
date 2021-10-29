import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${(props) => css`
    max-width: 500px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  `}
`
