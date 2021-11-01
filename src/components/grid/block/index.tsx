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
}

const Block: React.FC<IProps> = ({ rowIndex, colIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ workingGrid, selectedBlock }) => ({
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
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
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
