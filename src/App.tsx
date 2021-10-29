import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from './styles'
import { Content, Title } from './components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content>
        <Title> Sudoku </Title>
      </Content>
    </ThemeProvider>
  )
}

export default App
