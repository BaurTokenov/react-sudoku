import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { Container } from './styles'
import { IReducer, selectBlock } from 'reducers'
import { INDEX, N } from 'types'

interface IProps {
  rowIndex: INDEX
  colIndex: INDEX
}

interface IState {
  value: N
  isActive: boolean
  isPuzzle: boolean
  isHighlighted: boolean
}

const Block: React.FC<IProps> = ({ rowIndex, colIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ workingGrid, selectedBlock, challengeGrid }) => ({
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      isHighlighted:
        workingGrid &&
        selectedBlock &&
        workingGrid[selectedBlock[0]][selectedBlock[1]] ===
          workingGrid[rowIndex][colIndex]
          ? true
          : false,
    })
  )

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  function handleClick() {
    if (!state.isActive) {
      dispatch(selectBlock([rowIndex, colIndex]))
    }
  }

  return (
    <Container
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
      active={state.isActive}
      puzzle={state.isPuzzle}
      highlighted={state.isHighlighted}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
