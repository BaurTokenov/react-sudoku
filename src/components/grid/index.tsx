import React from 'react'

import { Container, Row } from './styles'
import Block from './block'

const Grid: React.FC = () => {
  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block data-cy="block" {...{ colIndex, rowIndex }} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
