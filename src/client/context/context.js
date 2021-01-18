import React from 'react';

// action
import { actionFilterList } from '../action/action'

// reducer
import { colorReducer, mixerReducer } from '../reducer/reducer';

const colorDefaultEnum = [
  {
    'name': 'red', // this is for easy testing.
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 254, 'g': 0, 'b': 0 }, // red
    'originRgb': { 'r': 254, 'g': 0, 'b': 0 }, // red
    'position': { 'x': 0, 'y' : 0 },
    'isDown': false,
    'isHit': false,
    'ref': null
  },
  {
    'name': 'orange',
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 255, 'g': 121, 'b': 0 }, // orange
    'originRgb': { 'r': 255, 'g': 121, 'b': 0 }, // orange
    'position': { 'x': 0, 'y': 0 },
    'isDown': false,
    'isHit': false,
    'ref': null
  },
  {
    'name': 'yellow',
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 255, 'g': 228, 'b': 0 }, // yellow
    'originRgb': { 'r': 255, 'g': 228, 'b': 0 }, // yellow
    'position': { 'x': 0, 'y': 0 },
    'isDown': false,
    'isHit': false,
    'ref': null
  },
  {
    'name': 'green',
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 174, 'g': 255, 'b': 0 }, // green
    'originRgb': { 'r': 174, 'g': 255, 'b': 0 }, // green
    'position': { 'x': 0, 'y': 0 },
    'isDown': false,
    'isHit': false,
    'ref': null
  },
  {
    'name': 'teal',
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 33, 'g': 221, 'b': 212 }, // teal
    'originRgb': { 'r': 33, 'g': 221, 'b': 212 }, // teal
    'position': { 'x': 0, 'y': 0 },
    'isDown': false,
    'isHit': false,
    'ref': null
  },
  {
    'name': 'blue',
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 0, 'g': 120, 'b': 255 }, // blue
    'originRgb': { 'r': 0, 'g': 120, 'b': 255 }, // blue
    'position': { 'x': 0, 'y': 0 },
    'isDown': false,
    'isHit': false,
    'ref': null
  },
  {
    'name': 'indigo',
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 30, 'g': 0, 'b': 255 }, // indigo
    'originRgb': { 'r': 30, 'g': 0, 'b': 255 }, // indigo
    'position': { 'x': 0, 'y': 0 },
    'isDown': false,
    'isHit': false,
    'ref': null
  },
  {
    'name': 'purple',
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 91, 'g': 0, 'b': 254 }, // purple
    'originRgb': { 'r': 91, 'g': 0, 'b': 254 }, // purple
    'position': { 'x': 0, 'y': 0 },
    'isDown': false,
    'isHit': false,
    'ref': null
  },
  {
    'name': 'deep-purple',
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 15, 'g': 5, 'b': 63 }, // deep-purple
    'originRgb': { 'r': 15, 'g': 5, 'b': 63 }, // deep-purple
    'position': { 'x': 0, 'y': 0 },
    'isDown': false,
    'isHit': false,
    'ref': null
  },
  {
    'name': 'white',
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 255, 'g': 255, 'b': 255 }, // white
    'originRgb': { 'r': 255, 'g': 255, 'b': 255 }, // white
    'position': { 'x': 0, 'y': 0 },
    'isDown': false,
    'isHit': false,
    'ref': null
  },
  {
    'name': 'black',
    'type': actionFilterList.COLOR,
    'rgb': { 'r': 0, 'g': 0, 'b': 0 }, // black
    'originRgb': { 'r': 0, 'g': 0, 'b': 0 }, // black
    'position': { 'x': 0, 'y': 0 },
    'isDown': false,
    'isHit': false,
    'ref': null
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
  iconDefaultEnum,
  colorReducer,
  mixerReducer
}

export const CoMixingContext = React.createContext(mainEnum);