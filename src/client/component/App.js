// library
import React, { useContext, Fragment } from 'react';

// customize js
import '../toolkit/index.js';

// components
import { Nav } from './Nav';
import { Footer } from './Footer';

// store
import { MainContext } from '../store';

// scss
import '../scss/style.scss';

export const App = () => {
  return (
    <Fragment>
      <Nav></Nav>
      <Footer></Footer>
    </Fragment>
  );
};
