import React from 'react';

const colorEnum = [
  {
    'name': 'red',
    'rgb': { 'r': 254, 'g': 0, 'b': 0 },
    'hex': 'fe0000'
  },
  {
    'name': 'orange',
    'rgb': { 'r': 255, 'g': 121, 'b': 0 },
    'hex': 'ff7900'
  },
  {
    'name': 'yellow',
    'rgb': { 'r': 255, 'g': 228, 'b': 0 },
    'hex': 'ffe401'
  },
  {
    'name': 'green',
    'rgb': { 'r': 174, 'g': 255, 'b': 0 },
    'hex': 'aeff00'
  },
  {
    'name': 'blue',
    'rgb': { 'r': 0, 'g': 120, 'b': 255 },
    'hex': '0078ff'
  },
  {
    'name': 'indigo',
    'rgb': { 'r': 30, 'g': 0, 'b': 255 },
    'hex': '1e00ff'
  },
  {
    'name': 'purple',
    'rgb': { 'r': 91, 'g': 0, 'b': 254 },
    'hex': '5b00fe'
  }
]

const iconEnum = [
  { 'name': 'undo', 'fa': 'fas fa-undo-alt' },
  { 'name': 'erase', 'fa': 'fas fa-eraser' }
]

const footerEnum = {
  title: 'Copyright © 有斯有文工作室, WW Studio. All Rights reserved.'
}

const mainEnum = {
  colorEnum,
  iconEnum,
  footerEnum
}

export const MainContext = React.createContext(mainEnum);