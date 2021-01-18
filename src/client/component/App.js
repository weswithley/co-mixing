// library
import React, { useContext, useReducer } from 'react';

// store
import { CoMixingContext, mainEnum } from '../context/context';

// customize js
import '../toolkit/toolkit.js';

// components
import { Nav } from './Nav';
import { Mixer } from './Mixer';

// scss
import '../scss/style.scss';

export const App = () => {
  const { colorDefaultEnum, colorNewEnum, iconDefaultEnum, colorReducer, mixerReducer } = mainEnum;
  const [colorUpdateNewEnum, colorReducerDispatch] = useReducer(colorReducer, colorNewEnum);
  const [mixerUpdateNewEnum, mixerReducerDispatch] = useReducer(mixerReducer, colorNewEnum);
  const context = { colorUpdateNewEnum, colorDefaultEnum, iconDefaultEnum, colorReducerDispatch, mixerReducerDispatch }

  return (
    <CoMixingContext.Provider value={ context }>
      <Nav></Nav>
      <Mixer></Mixer>
    </CoMixingContext.Provider>
  );
};