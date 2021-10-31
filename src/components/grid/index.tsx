import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { Container, Row } from './styles'
import Block from './block'
import { GRID } from 'types'
import { createFullGrid } from 'utils'

import { createGrid } from 'reducers'
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
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const create = useCallback(() => {
    dispatch(createGrid())
  }, [dispatch])

  const [grid, setGrid] = useState<GRID>(gridStart)
  console.log({ grid })

  React.useEffect(() => {
    create()
  }, [create])

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
