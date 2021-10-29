import React from 'react'

import { Container } from './styles'

interface IProps {
  rowIndex: number
  colIndex: number
}

const Block: React.FC<IProps> = ({ rowIndex, colIndex }) => {
  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`}>
      {rowIndex * 9 + colIndex}
    </Container>
  )
}

export default Block
