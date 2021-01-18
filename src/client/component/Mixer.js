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
  const { colorUpdateNewEnum, colorReducerDispatch, mixerReducerDispatch } = useContext(CoMixingContext);
  const tmpMixerReducerDispatch = () => {
    const isLeastOneColorDown = colorUpdateNewEnum.filter((item) => { return item.isDown }).length > 0;
    if (!isLeastOneColorDown){ return };

    const tmpAction = {
      'colorUpdateNewEnum': colorUpdateNewEnum,
      'type': actionFilterList.MIXER_MOVE
    }
    mixerReducerDispatch(tmpAction);
  }

  return (
    <div className='mixer'
      onMouseMove={tmpMixerReducerDispatch}
    >
      {
        colorUpdateNewEnum.map((item, index) => {
          return (
            <ColorBtn
              key={'color-btn-mixer-' + item.rgb.r + item.rgb.g + item.rgb.b}
              colorSettings={item}
              colorReducerDispatch={colorReducerDispatch}
              mixerMode={true}
              index={index}
            >
            </ColorBtn>
          )
        })
      }
    </div>
  );
};
