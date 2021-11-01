import { Button } from 'components'
import React from 'react'

import { NUMBERS } from 'types'
import { Container } from './styles'
import NumberButton from './button'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]

const Numbers: React.FC = () => {
  return (
    <Container>
      {numbers.map((number) => (
        <NumberButton number={number} key={number} />
      ))}
    </Container>
  )
}

export default Numbers
