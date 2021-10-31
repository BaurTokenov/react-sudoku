import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useMousetrap from 'react-hook-mousetrap'
import { AnyAction, Dispatch } from 'redux'

import { Container, Row } from './styles'
import Block from './block'
import { BLOCK_COORDS, INDEX } from 'types'

import { createGrid, IReducer, selectBlock } from 'reducers'

interface IState {
  selectedBlock: BLOCK_COORDS
}

const Grid: React.FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const state = useSelector<IReducer, IState>(({ selectedBlock }) => ({
    selectedBlock: selectedBlock || [4, 4],
  }))

  const create = useCallback(() => {
    dispatch(createGrid())
  }, [dispatch])

  function handleMoveSelectedBlock(
    direction: 'up' | 'right' | 'down' | 'left',
    oldCoords: BLOCK_COORDS
  ) {
    function isValid(newCoords: BLOCK_COORDS): boolean {
      return (
        newCoords[0] >= 0 &&
        newCoords[0] <= 8 &&
        newCoords[1] >= 0 &&
        newCoords[1] <= 8
      )
    }
    const deltas = {
      up: [-1, 0],
      right: [0, 1],
      down: [1, 0],
      left: [0, -1],
    }
    const delta = deltas[direction]
    const newCoords: BLOCK_COORDS = [
      (oldCoords[0] + delta[0]) as INDEX,
      (oldCoords[1] + delta[1]) as INDEX,
    ]
    if (isValid(newCoords)) {
      dispatch(selectBlock(newCoords))
    }
  }

  useEffect(() => {
    create()
  }, [create])

  function moveUp() {
    console.log('Up')
    handleMoveSelectedBlock('up', state.selectedBlock)
  }

  function moveRight() {
    console.log('Right')
    handleMoveSelectedBlock('right', state.selectedBlock)
  }

  function moveDown() {
    console.log('Down')
    handleMoveSelectedBlock('down', state.selectedBlock)
  }

  function moveLeft() {
    console.log('Left')
    handleMoveSelectedBlock('left', state.selectedBlock)
  }

  useMousetrap('up', moveUp)
  useMousetrap('right', moveRight)
  useMousetrap('down', moveDown)
  useMousetrap('left', moveLeft)

  return (
    <Container data-cy="grid-container">
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  data-cy="block"
                  {...{
                    colIndex: colIndex as INDEX,
                    rowIndex: rowIndex as INDEX,
                  }}
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
