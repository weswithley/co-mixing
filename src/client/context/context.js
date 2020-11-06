import React from 'react';

// action
import { actionFilterList } from '../action/action'

// reducer
// import { colorReducer } from '../reducer/reducer';

const colorDefaultEnum = [
  {
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 254, 'g': 0, 'b': 0 } // red
  },
  {
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 255, 'g': 121, 'b': 0 } // orange
  },
  {
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 255, 'g': 228, 'b': 0 } // yellow
  },
  {
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 174, 'g': 255, 'b': 0 } // green
  },
  {
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 33, 'g': 221, 'b': 212 } // teal
  },
  {
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 0, 'g': 120, 'b': 255 } // blue
  },
  {
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 30, 'g': 0, 'b': 255 } // indigo
  },
  {
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 91, 'g': 0, 'b': 254 } // purple
  },
  {
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 15, 'g': 5, 'b': 63 } // deep-purple
  },
  {
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 255, 'g': 255, 'b': 255 } // white
  },
  {
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 0, 'g': 0, 'b': 0 } // black
  }
]

const colorNewEnum = []

const iconDefaultEnum = [
  { 'name': 'undo', 'fa': 'fas fa-undo-alt' },
  { 'name': 'erase', 'fa': 'fas fa-eraser' }
]

export const mainEnum = {
  colorDefaultEnum,
  colorNewEnum,
  iconDefaultEnum
}

export const CoMixingContext = React.createContext(mainEnum);