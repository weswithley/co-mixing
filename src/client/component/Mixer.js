// library
import React, { useContext, useEffect } from 'react';

// action
import { actionFilterList } from '../action/action';

// components
import { ColorBtn } from './ColorBtn';

// scss
import '../scss/mixer.scss';

// context
import { CoMixingContext } from '../context/context';

export const Mixer = () => {
  const { colorUpdateNewEnum, colorReducerDispatch } = useContext(CoMixingContext);

  return (
    <div className='mixer'>
      {
        colorUpdateNewEnum.map((item) => {
          return (
            <ColorBtn
              key={'color-btn' + item.rgb.r + item.rgb.g + item.rgb.b}
              colorSettings={
                {
                  type: actionFilterList.COLOR_REMOVE,
                  rgb: item.rgb
                }
              }
              colorSwitcher={colorReducerDispatch}>
            </ColorBtn>
          )
        })
      }
    </div>
  );
};
