import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from './styles'
import { Content, Title, Card, Grid } from './components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content data-cy="content">
        <Title data-cy="title"> Sudoku </Title>
        <Card data-cy="card">
          <Grid />
        </Card>
      </Content>
    </ThemeProvider>
  )
}

export default App
