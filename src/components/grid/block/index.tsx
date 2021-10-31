import React from 'react'
import { useSelector } from 'react-redux'

import { Container } from './styles'
import { IReducer } from 'reducers'
import { N } from 'types'

interface IProps {
  rowIndex: number
  colIndex: number
  value: number
}

interface IState {
  value: N
}

const Block: React.FC<IProps> = ({ rowIndex, colIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid }) => ({
    value: grid ? grid[rowIndex][colIndex] : 0,
  }))
  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`}>
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
