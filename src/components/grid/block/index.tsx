import React from 'react'

import { Container } from './styles'

interface IProps {
  rowIndex: number
  colIndex: number
  value: number
}

const Block: React.FC<IProps> = ({ rowIndex, colIndex, value }) => {
  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`}>{value}</Container>
  )
}

export default Block
