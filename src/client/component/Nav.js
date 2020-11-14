// library
import React, { useContext } from 'react';

// components
import { ColorBtn } from './ColorBtn';

// context
import { CoMixingContext } from '../context/context';

// scss
import '../scss/nav.scss';

export const Nav = () => {
  const { colorDefaultEnum, colorReducerDispatch } = useContext(CoMixingContext);
  return (
    <nav>
      {
        colorDefaultEnum.map((item) => {
          return (
            <ColorBtn
              key={'color-btn-nav-' + item.rgb.r + item.rgb.g + item.rgb.b}
              colorSettings={item}
              colorReducerDispatch={colorReducerDispatch}>
            </ColorBtn>
          )
        })
      }
    </nav>
  );
};