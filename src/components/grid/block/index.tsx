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
}

const Block: React.FC<IProps> = ({ rowIndex, colIndex }) => {
  console.log({ rowIndex, colIndex })
  const state = useSelector<IReducer, IState>(({ grid }) => ({
    value: grid ? grid[rowIndex][colIndex] : 0,
  }))

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  function handleClick() {
    dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`} onClick={handleClick}>
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
