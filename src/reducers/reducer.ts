import { AnyAction } from 'redux'
import { GRID } from 'types'
import { compareGrids, copyGrid, createFullGrid, removeNumbers } from 'utils'

import { IReducer } from './interfaces'
import * as types from './types'

const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid()
      const gridCopy = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(gridCopy)
      const workingGrid = copyGrid(challengeGrid)
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      }
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords,
      }
    case types.FILL_BLOCK:
      const { selectedBlock } = state
      if (state.workingGrid && state.solvedGrid && selectedBlock) {
        const [x, y] = selectedBlock
        if (state.solvedGrid[x][y] !== action.value) {
          alert('Incorrect option!')
          return state
        }
        state.workingGrid[x][y] = action.value
        if (compareGrids(state.workingGrid, state.solvedGrid)) {
          alert('Puzzle completed')
        }
        return { ...state, workingGrid: [...state.workingGrid] as GRID }
      }
      return state
    default:
      return state
  }
}

export default reducer
