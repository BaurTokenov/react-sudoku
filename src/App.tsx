import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from './styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div> Hello World</div>
    </ThemeProvider>
  )
}

export default App
