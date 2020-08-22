// library
import React from 'react';

// scss
import '../scss/footer.scss';

// store
import { MainContext } from '../store';

export const Footer = () => {
  const { footerEnum } = React.useContext(MainContext);

  return (
    <footer>{ footerEnum.title }</footer>
  );
};
