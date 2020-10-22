// library
import React from 'react';

// store
import { MainContext } from '../store';

// scss
import '../scss/footer.scss';

export const Footer = () => {
  const { footerEnum } = React.useContext(MainContext);

  return (
    <footer>{ footerEnum.title }</footer>
  );
};
