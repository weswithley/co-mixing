// library
import React, { useContext, Fragment } from 'react';

// customize js
import '../toolkit/index.js';

// components
import { Footer } from './Footer';

// store
import { MainContext } from '../store';

// scss
import '../scss/style.scss';

export const App = () => {
  const { colorEnum, iconEnum, footerEnum} = useContext(MainContext);
  const mainEnum = { colorEnum, iconEnum, footerEnum }

  return (
    <Fragment>
      <div>co-mixing</div>
      <Footer></Footer>
    </Fragment>
  );
};
