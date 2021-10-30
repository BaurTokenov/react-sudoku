import React, { useState } from 'react'

import { Container, Row } from './styles'
import Block from './block'
import { GRID } from 'types'
import { createFullGrid } from 'utils'

const gridStart: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const Grid: React.FC = () => {
  const [grid, setGrid] = useState<GRID>(gridStart)
  console.log({ grid })
  React.useEffect(() => {
    const newGrid = createFullGrid()
    setGrid(newGrid)
  }, [])
  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        grid.map((row, rowIndex) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              row.map((number, colIndex) => (
                <Block
                  data-cy="block"
                  {...{ colIndex, rowIndex, value: number }}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
