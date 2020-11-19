// library
import React, { useEffect, useRef } from 'react';
import { gsap, TweenMax, Back} from "gsap/all";
gsap.registerPlugin(TweenMax, Back);

// scss
import '../scss/color-btn.scss';

// action
import { actionFilterList } from '../action/action';

export const ColorBtn = (props) => {
  const { colorSettings, colorReducerDispatch, mixerMode, index } = props;
  const currentColorBtn = useRef(null);
  const currentRGB = 'rgb(' + colorSettings.rgb.r + ',' + colorSettings.rgb.g + ',' + colorSettings.rgb.b + ')';
  const currentBtnEnum = {
    'enter': {
      target: null,
      type: actionFilterList.COLOR_ENTER
    },
    'leave': {
      target: null,
      type: actionFilterList.COLOR_LEAVE
    },
    'up': {
      target: null,
      type: actionFilterList.COLOR_UP
    },
    'down': {
      target: null,
      type: actionFilterList.COLOR_DOWN
    }
  }

  const styleEnum = {
    backgroundColor: currentRGB,
    top: window.innerHeight / 2,
    left: !index && index !== 0 ? window.innerWidth / 2 : window.innerWidth / 2 - ((index * -1) * 30) // make 2 color mixer btn stay with order.
  }

  useEffect(() => {
    currentBtnEnum['enter'].target = currentBtnEnum['leave'].target = currentBtnEnum['up'].target = currentBtnEnum['down'].target = currentColorBtn.current
  })

  return (
    <div
      className="color-btn"
      ref={currentColorBtn}
      style={ styleEnum }
      onClick={() => !mixerMode && colorReducerDispatch(colorSettings)}
      onTouchStart={() => !mixerMode && colorReducerDispatch(colorSettings)}
      onDoubleClick={() => mixerMode && colorReducerDispatch(colorSettings)}
      onMouseEnter={() => mixerMode && colorReducerDispatch(currentBtnEnum['enter'])}
      onMouseLeave={() => mixerMode && colorReducerDispatch(currentBtnEnum['leave'])}
      onMouseUp={() => mixerMode && colorReducerDispatch(currentBtnEnum['up'])}
      onMouseDown={() => mixerMode && colorReducerDispatch(currentBtnEnum['down'])}
    >
    </div>
  );
};
