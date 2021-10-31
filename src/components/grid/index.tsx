import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { Container, Row } from './styles'
import Block from './block'
import { INDEX } from 'types'

import { createGrid } from 'reducers'

const Grid: React.FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const create = useCallback(() => {
    dispatch(createGrid())
  }, [dispatch])

  useEffect(() => {
    create()
  }, [create])

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
