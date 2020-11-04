// library
import React, { useContext } from 'react';

// customize js
import '../toolkit/toolkit.js';

// components
import { ColorBtn } from './ColorBtn';

// store
import { coMixingContext } from '../context/context';

// scss
import '../scss/nav.scss';

export const Nav = () => {
  const { colorDefaultEnum, colorReducer } = useContext(coMixingContext);

  return (
    <nav>
      { colorDefaultEnum.map((item) => {
        return (
            <ColorBtn
              key={'color-btn' + item.rgb.r + item.rgb.g + item.rgb.b}
              colorSettings={item}
              colorSwitcher={colorReducer}>
            </ColorBtn>
          )
        })
      }
    </nav>
  );
};