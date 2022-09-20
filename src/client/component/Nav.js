// library
import React, { useContext } from 'react';

// components
import { ColorBtn } from './ColorBtn';

// context
import { CoMixingContext } from '../context/context';

// scss
import navStyle from '../scss/nav.module.scss';

export const Nav = () => {
  const { colorDefaultEnum, colorReducerDispatch } = useContext(CoMixingContext);
  return (
    <nav className={navStyle['co-mixing-nav']}>
      {
        colorDefaultEnum.map((item) => {
          return (
            <ColorBtn
              key={'color-btn-nav-' + item.rgb.r + item.rgb.g + item.rgb.b}
              colorSettings={item}
              colorReducerDispatch={colorReducerDispatch}
            >
            </ColorBtn>
          )
        })
      }
    </nav>
  );
};