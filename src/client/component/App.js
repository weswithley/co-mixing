// library
import React, { useContext, Fragment } from 'react';

// customize js
import '../toolkit/toolkit.js';

// components
import { Nav } from './Nav';

// store
import { coMixingContext } from '../context/context';

// scss
import '../scss/style.scss';

export const App = () => {
  const context = useContext(coMixingContext);

  return (
    <coMixingContext.Provider value={context }>
      <Fragment>
        <Nav></Nav>
      </Fragment>
    </coMixingContext.Provider>
  );
};
