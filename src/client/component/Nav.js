// library
import React, { useContext } from 'react';

// customize js
import '../toolkit/index.js';

// components
import { ColorBtn } from './ColorBtn';

// store
import { MainContext } from '../store';

// scss
import '../scss/nav.scss';

export const Nav = () => {
  const { colorEnum } = useContext(MainContext);

  return (
    <nav>
      { colorEnum.map((item) => { return <ColorBtn key={'color-btn' + item.hex} colorSettings={item}></ColorBtn> }) }
    </nav>
  );
};