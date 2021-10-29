import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${(props) => css`
    colors: ${props.theme.colors.white};
    margin-top: 0;
    text-align: center;
  `}
`
