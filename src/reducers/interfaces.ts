import { BLOCK_COORDS, GRID } from 'types'

export interface IReducer {
  selectedBlock?: BLOCK_COORDS
  challengeGrid?: GRID
  solvedGrid?: GRID
  workingGrid?: GRID
}
