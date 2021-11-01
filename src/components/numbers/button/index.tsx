import React, { FC, useCallback } from 'react'
import { NUMBERS } from 'types'
import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { fillBlock } from 'reducers'
import { Button } from 'components'

interface IProps {
  number: NUMBERS
}

const NumberButton: FC<IProps> = ({ number }) => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const handleFill = useCallback(() => {
    dispatch(fillBlock(number))
  }, [dispatch, number])
  return (
    <Button key={number} onClick={handleFill}>
      {number}
    </Button>
  )
}

export default NumberButton
